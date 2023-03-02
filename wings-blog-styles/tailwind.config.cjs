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
		      'primaryLight':'#FEF2D0',
		      'gray':'#DCDCDC',
		      'gray2':'#BEBEBE',
		      'gray3':'#757589',
		      'orange':'#FFC017',
		    },	
		    boxShadow: {
		        'shadowLg': '0 15px 35px rgba(255, 192, 23, 0.2)',
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
