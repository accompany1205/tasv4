import plugin from 'tailwindcss/plugin';

export default plugin(
	({ addComponents, matchUtilities, theme }) => {
		matchUtilities(
			{
				fluid: (value) => ({
					fontSize: `clamp(1.25rem, ${value}vw, 3rem)`,
					// whiteSpace: 'nowrap',
				}),
			},
			{ values: theme('fluidSize') },
		);
		matchUtilities(
			{
				'text-fc': (value: string) => {
					const parsed_value = value.split(' ');
					return {
						fontSize: `clamp(${parsed_value[0]}, ${parsed_value[1]}, ${parsed_value[2]})`,
						// whiteSpace: 'nowrap',
					};
				},
			},
			{ values: theme('containerSize') },
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
			containerSize: {
				sm: '1.25rem_3vw_3rem',
				md: '1.25rem_3vw_3rem',
				lg: '1.25rem_3vw_3rem',
				xl: '1.25rem_3vw_3rem',
			},
			extend: {},
		},
	},
);
