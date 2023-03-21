/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Kumbh Sans", "sans-serif"],
		},
		extend: {
			colors: {
				orange: {
					default: "hsl(26, 100%, 55%)",
					pale: "hsl(25, 100%, 94%)",
				},
				blue: {
					very_dark: "hsl(220, 13%, 13%)",
					dark_gray: "hsl(219, 9%, 45%)",
					gray: "hsl(220, 14%, 75%)",
					light_gray: "hsl(223, 64%, 98%)",
				},
			},
		},
	},
	plugins: [],
};
