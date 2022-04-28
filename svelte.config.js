import adapter from '@sveltejs/adapter-auto';
import { optimizeImports } from "carbon-preprocess-svelte";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),
	kit: {
		adapter: adapter()
	}
};

export default config;
