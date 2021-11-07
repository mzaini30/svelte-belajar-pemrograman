import { mdsvex } from "mdsvex";
import { imagetools } from 'vite-imagetools'
import WindiCSS from 'vite-plugin-windicss'
import adapterStatic from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: mdsvex(),
	extensions: ['.md'],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterStatic(),
		vite: {
		 plugins: [
		   WindiCSS(),
		   imagetools()
		 ],
		},
	}
};

export default config;
