import fluidText from './tailwind/fluid-text';
import deviceSizes from './tailwind/device';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}',
	],

	darkMode: 'class',

	theme: {
		fontFamily: {
			akshar: ['Akshar Variable', 'Arial', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					100: '#f2fbf3',
					200: '#e0f8e3',
					300: '#c2f0c8',
					400: '#93e29d',
					500: '#61ce70', //Green
					600: '#35b247',
					700: '#279236',
					800: '#22732e',
					900: '#1f5c28', // Optimal text contrast on white					
				},

				emerald: {
					50: '#f2fbf3',
					100: '#e0f8e3',
					200: '#c2f0c8',
					300: '#93e29d',
					400: '#61ce70', //Green
					500: '#35b247',
					600: '#279236',
					700: '#22732e',
					800: '#1f5c28', // Optimal text contrast on white
					900: '#1c4b24',
					950: '#0a2910',
				},
				'nile-blue': {
					50: '#f3f7fc',
					100: '#e6eef8',
					200: '#c6dcf1',
					300: '#95c0e4',
					400: '#5c9ed4',
					500: '#3783c0',
					600: '#2767a2',
					700: '#205284',
					800: '#1e476e',
					900: '#1b3652', //Dark Blue
					950: '#14273d',
				},
				'bay-of-many': {
					50: '#f3f7fc',
					100: '#e7eff7',
					200: '#c9dbee',
					300: '#9abfdf',
					400: '#649ccc',
					500: '#4080b7',
					600: '#2f669a',
					700: '#295582', //Light Blue
					800: '#244668',
					900: '#233c57',
					950: '#17273a',
				},
				alabaster: {
					50: '#f9f9f9', //White
					100: '#efefef',
					200: '#dcdcdc',
					300: '#bdbdbd',
					400: '#989898',
					500: '#7c7c7c',
					600: '#656565',
					700: '#525252',
					800: '#464646', //Black
					900: '#3d3d3d',
					950: '#292929',
				},
			},
			aspectRatio: {
				'4/3': '4 / 3',
				tarot: '11 / 19',
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/container-queries'),
		require('flowbite-typography'),
		require('@tailwindcss/typography'),
		fluidText,
		deviceSizes,
	],
};
