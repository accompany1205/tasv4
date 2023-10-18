import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents, matchUtilities, theme }) => {}, {
	theme: {
		extend: {
			screens: {
				micro: '0px',
				folded: '280px',
				unfolded: '540px',
			},
		},
	},
});
