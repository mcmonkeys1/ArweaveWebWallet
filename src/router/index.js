import { createRouter, createWebHashHistory } from 'vue-router'
import ArweaveStore, { getWalletById } from '@/store/ArweaveStore'
import InterfaceStore, { emitter } from '@/store/InterfaceStore'
import Wallet from '@/views/Wallet.vue'
import TxList from '@/views/TxList.vue'
import Send from '@/views/Send.vue'
import Tokens from '@/views/Tokens.vue'

const routes = [
	{
		name: 'Wallet',
		path: '/wallet/:walletId(\\d+)',
		component: Wallet,
		props: (route) => ({ wallet: getWalletById(route.params.walletId) }),
		beforeEnter: (to) => {
			if (!ArweaveStore.wallets[0]) { return { name: 'Welcome' } }
			if (!to.params.walletId || !getWalletById(to.params.walletId)) {
				return { name: 'TxList', params: { walletId: ArweaveStore.wallets[0].id } }
			}
		},
		children: [
			{
				name: 'TxList',
				path: 'tx-list',
				component: TxList,
				meta: { title: 'Transactions' },
				props: (route) => ({ wallet: getWalletById(route.params.walletId) }),
			},
			{
				name: 'Send',
				path: 'send',
				component: Send,
				meta: { title: 'Send' },
				props: (route) => ({ wallet: getWalletById(route.params.walletId),
					model: InterfaceStore.wallet.send }),
			},
			{
				name: 'Tokens',
				path: 'tokens',
				component: Tokens,
				meta: { title: 'Tokens' },
				props: (route) => ({ wallet: getWalletById(route.params.walletId) }),
			},
		],
	},
	{
		name: 'Tx',
		path: '/tx/:txId',
		component: () => import('@/views/Tx.vue'),
		meta: { title: 'Arweave Transaction' },
		props: true,
	},
	{
		name: 'Profile',
		path: '/profile/:key',
		component: () => import('@/views/Profile.vue'),
		meta: { title: 'Arweave Profile' },
		props: true,
	},
	{
		path: '/add',
		name: 'AddWallet',
		component: () => import('@/views/AddWallet.vue'),
		meta: { title: 'Add Wallets' }
	},
	{
		path: '/edit',
		name: 'EditWallet',
		component: () => import('@/views/EditWallet.vue'),
		meta: { title: 'Edit Wallets' },
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () => import('@/views/Settings.vue'),
		meta: { title: 'Settings' },
	},
	{
		path: '/welcome',
		name: 'Welcome',
		component: () => import('@/views/Welcome.vue'),
		meta: { title: 'Welcome to the weave' },
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: () => ArweaveStore.wallets[0]
			? { name: 'TxList', params: { walletId: ArweaveStore.wallets[0].id } }
			: { name: 'Welcome' }
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior: (to, from, savedPosition) => new Promise((resolve) => {
		const position = savedPosition || { top: 0 }
		emitter.once('beforeEnter', () => resolve(position))
	})
})

export default router
