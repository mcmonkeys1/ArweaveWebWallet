import { ArweaveProvider, arweave } from '@/store/ArweaveStore'
import { getChannel } from '@/functions/Channels'
import { passwordEncrypt, passwordDecrypt } from '@/functions/Crypto'
import { download } from '@/functions/Utils'
import { getKeyPairFromMnemonic } from 'human-crypto-keys'
import { generateMnemonic as generateM, validateMnemonic as validateM } from 'bip39-web-crypto'
import wordlist from 'bip39-web-crypto/src/wordlists/english.json'
import { computed, reactive } from 'vue'



const WalletsChannel = getChannel('wallets', undefined, [])
export const WalletsData = computed<WalletDataInterface[]>({
	get () { return WalletsChannel.state as any },
	set (value) { WalletsChannel.set(value) }
})



class WalletProxy extends ArweaveProvider {
	#wallet: WalletDataInterface
	constructor (wallet: WalletDataInterface) {
		super(wallet)
		this.#wallet = wallet
	}
	get id () { return this.#wallet.id }
}



const WalletsStore: { [key: string]: WalletProxy } = {}
export const Wallets = computed<WalletProxy[]>({
	get () {
		const runningWallets = Object.keys(WalletsStore)
		const storageWallets = WalletsData.value.map(w => w.id + '')
		for (const id of [...runningWallets, ...storageWallets]) {
			if (runningWallets.includes(id) && !storageWallets.includes(id)) { delete WalletsStore[id] }
			if (!runningWallets.includes(id) && storageWallets.includes(id)) {
				const wallet = WalletsData.value.find(w => w.id == +id)
				WalletsStore[id] = new WalletProxy(wallet!)
			}
		}
		return Object.values(WalletsStore).sort((a, b) => WalletsData.value.findIndex(w => w.id == a.id) - WalletsData.value.findIndex(w => w.id == b.id))
	},
	set (value) {
		WalletsData.value = WalletsData.value.filter(w => value.find(v => v.id == w.id))
			.sort((a, b) => value.findIndex(w => w.id == a.id) - value.findIndex(w => w.id == b.id))
	}
})



export function getWalletById (walletId: number | string) {
	return Wallets.value.find(wallet => wallet.id == walletId)
}

export async function generateMnemonic () {
	return generateM(undefined, undefined, wordlist)
}

export async function validateMnemonic (mnemonic: string) {
	return validateM(mnemonic, wordlist)
}

export async function addMnemonic (mnemonic: string) {
	let keyPair = await getKeyPairFromMnemonic(mnemonic, { id: 'rsa', modulusLength: 4096 }, { privateKeyFormat: 'pkcs8-der' })
	const imported = await window.crypto.subtle.importKey(
		'pkcs8',
		keyPair.privateKey,
		{
			name: 'RSA-PSS',
			// modulusLength: 4096,
			// publicExponent: new Uint8Array([1, 0, 1]),
			hash: 'SHA-256',
		},
		true,
		['sign']
	)
	let jwk = await window.crypto.subtle.exportKey('jwk', imported)
	delete jwk.alg
	delete jwk.key_ops
	console.info('generated wallet')
	return addWallet(jwk)
}

export async function addWallet (jwkObj: JsonWebKey) {
	const jwk = jwkObj || await arweave.wallets.generate()
	const key = await arweave.wallets.jwkToAddress(jwk) as string
	if (!jwkObj) { download(key, JSON.stringify(jwk)) }
	const wallet = { id: getNewId(), key, jwk }
	WalletsData.value.push(wallet)
	return wallet.id
}

export async function watchWallet (arweaveWallet: any) {
	const key = arweaveWallet.key
		|| arweaveWallet.getActiveAddress ? await arweaveWallet.getActiveAddress() : undefined
	if (!key) { return }
	const wallet = { id: getNewId(), key }
	WalletsData.value.push(wallet)
	return wallet.id
}

export function deleteWallet (wallet: WalletDataInterface) {
	WalletsData.value.splice(WalletsData.value.indexOf(wallet), 1)
}

export function getNewId () {
	for (let i = 0; i <= WalletsData.value.length; i++) {
		if (WalletsData.value.map(e => e.id).indexOf(i) === -1) { return i }
	}
	return 0
}