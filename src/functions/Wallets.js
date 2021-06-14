import ArweaveStore from '@/store/ArweaveStore'
import Ledger from '@/functions/Ledger'
import { generateMnemonic, getKeyFromMnemonic } from "arweave-mnemonic-keys"

export async function newWallet (jwkObj) {
	const jwk = jwkObj || await ArweaveStore.arweave.wallets.generate()
	const key = await ArweaveStore.arweave.wallets.jwkToAddress(jwk)
	if (!jwkObj) { download(key, JSON.stringify(jwk)) }
	const wallet = { key, jwk }
	return ArweaveStore.pushWallet(wallet)
}

export async function newPassphrase (passphrase) {
	const currentPassphrase = passphrase || await generateMnemonic()
	const jwk = await getKeyFromMnemonic(currentPassphrase)
	newWallet(jwk)
	return currentPassphrase
}

export async function newLedger () {
	const address = (await Ledger.getAddress())?.address
	if (!address) { return }
	const wallet = { key: address }
	return ArweaveStore.pushWallet(wallet)
}

function download (filename, text) {
	var element = document.createElement('a')
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
	element.setAttribute('download', filename)
	element.style.display = 'none'
	document.body.appendChild(element)
	element.click()
	document.body.removeChild(element)
}
