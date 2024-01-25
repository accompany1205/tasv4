import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [imagetools(), sveltekit()],

	server: {
		proxy: {
		  '/tas': {
			target: 'http://localhost:5173',
			changeOrigin: true,
			configure: (proxy, options) => {
			  proxy.on('proxyRes', function (proxyRes) {
				if (proxyRes.headers['x-frame-options']) {
				  delete proxyRes.headers['x-frame-options']; // Removes the header from the response
				}
			  });
			},
		  },
		},
	  },


});
