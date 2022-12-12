// @ts-ignore
import { v4 } from 'uuid'

export function uuidV4 () { return v4() as string }

export function debounce <T extends (...args: any[]) => any> (fun: T, options?: { timeout?: number, animationFrame?: true }) {
	let timer: any
	let promises = [] as Function[]
	return ((...args: any[]) => {
		return new Promise<ReturnType<T>>(res => {
			promises.push(res)
			// @ts-ignore
			const resolve = () => promises.forEach(res => res(fun.apply(this, args)))
			if (options?.animationFrame) {
				cancelAnimationFrame(timer)
				timer = requestAnimationFrame(() => resolve())
			} else {
				clearTimeout(timer)
				timer = setTimeout(() => resolve(), options?.timeout ?? 500)
			}
		})
	}) as (...args: Parameters<T>) => Promise<ReturnType<T>>
}

export function humanFileSize (size: string | number) {
	if (size == null) { return '' }
	if (size == 0) { return '0 B' }
	const i = Math.floor(Math.log(+size) / Math.log(1024))
	return +(+size / Math.pow(1024, i)).toFixed(2) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}

export async function addressToHash (address?: string) {
	if (!address) { return }
	const hashBuffer = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(address))
	const hashArray = Array.from(new Uint8Array(hashBuffer))
	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
	return hashHex
}

export function addressHashToColor (addressHash?: string) {
	if (!addressHash) { return [0, 0, 0] }
	const colors = hsl2rgb(parseInt(addressHash.substr(-7), 16) / 0xfffffff, 0.25, 0.6)
	return colors.map(Math.round)
}

function hsl2rgb (h: number, s: number, b: number) {
	h *= 6
	const s2 = [b += s *= b < .5 ? b : 1 - b, b - h % 1 * s * 2, b -= s *= 2, b, b + h % 1 * s, b + s]
	return [s2[~~h % 6] * 255, s2[(h | 16) % 6] * 255, s2[(h | 8) % 6] * 255]
}

function hexToRgb (hex: string) {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result ? [ parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16) ].join(',') : null
}

function rgbToHex (rgb: string) {
	const [r, g, b] = rgb.split(',').map(v => +v)
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export function normalizeColorTo (type: 'hex' | 'rgb', color: string) {
	if (type === 'rgb' && color.startsWith('#')) { return hexToRgb(color) }
	if (type === 'hex' && color.includes(',')) { return rgbToHex(color) }
	return color
}

export function generateUrl (url: string) {
	if (!url.includes('://')) { url = 'https://' + url }
	return new URL(url).href
}