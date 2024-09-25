import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/fetchex',
	build: {
		outDir: 'docs',
		emptyOutDir: true
	},
});
