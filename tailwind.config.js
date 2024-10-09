/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				matrixGreen: "#00FF41",
			},
			keyframes: {
				drop: {
					"0%": { transform: "translateY(-100%)" }, // Start above the container
					"100%": { transform: "translateY(100%)" }, // End below the container
				},
			},
			animation: {
				drop: "drop 1s linear infinite",
			},
		},
	},
	plugins: [],
};
