import { WorkerEntrypoint } from "cloudflare:workers";
import { initialize, svg2png } from 'svg2png-wasm';
// @ts-ignore
import wasm from 'svg2png-wasm/svg2png_wasm_bg.wasm';

initialize(wasm).catch(() => {});

export default class SVG2PNG extends WorkerEntrypoint {
	async fetch() { return new Response(null, {status: 404}); }

	async convert(svg: string) {
		return await svg2png(svg);
	}
}
