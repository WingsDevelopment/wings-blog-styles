/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
	theme: { 
		extend: { 
			 fontFamily: {
		      sans: ['Poppins', 'sans-serif'],
		    },
			colors: {
		      'dark': '#0D0D0D',
		      'primary': '#FFC017',
		      'primarydark': '#F1B40F',
		      'darkgray':'#575757',
		      'darkcolor':'#828282',
		      'primaryLight':'#FEF2D0',
		      'gray':'#DCDCDC',
		      'bordercolor':'#CBCBCB',
		      'gray2':'#BEBEBE',
		      'gray3':'#757589',
		      'orange':'#FFC017',
		      'dividercolor':'#A39797',
		      'dividertxt':'#757171',
		    },	
		    boxShadow: {
		        'shadowLg': '0 15px 35px rgba(255, 192, 23, 0.2)',
		        'shadowBox': '0 35px 115px rgba(255, 192, 23, 0.2)',
		        'shadowBtn': '0 1px 1px rgba(0, 0, 0, 0.25)',
	      	},
		}
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwind-scrollbar'),
	],
	variants: {
        scrollbar: ['rounded']
    }
};
