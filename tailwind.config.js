/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				display: [ 'IBM Plex Sans' ],
				headings: [ 'Literata' ]
			},
			minWidth: {
				'0': '0',
				'20': '20%',
				'40': '40%',
				'50': '50%',
				'60': '60%',
				'80': '75%',
				full: '100%'
			}
		}
	},
	variants: {
		backgroundColor: [ 'responsive', 'hover', 'focus', 'active' ],
		fontStyle: [ 'responsive', 'hover', 'focus' ]
	},
	plugins: []
}
