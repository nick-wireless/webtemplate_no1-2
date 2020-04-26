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
			}
		}
	},
	variants: {
		backgroundColor: [ 'responsive', 'hover', 'focus', 'active' ],
		fontStyle: [ 'responsive', 'hover', 'focus' ]
	},
	plugins: []
}
