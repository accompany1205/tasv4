import plugin from 'tailwindcss/plugin';

export default plugin(
	({ addComponents, matchUtilities, theme }) => {
		matchUtilities(
			{
				fluid: (value) => ({
					fontSize: `clamp(1rem, ${value}vw, 3rem)`,
					whiteSpace: 'nowrap',
				}),
			},
			{ values: theme('fluidSize') },
		);
	},
	{
		theme: {
			fluidSize: {
				h1: '4',
				h2: '3',
				h3: '2',
				h4: '1',
			},
			extend: {},
		},
	},
);
