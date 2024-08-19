/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg': 'var(--bg)',
				'bg-alt': 'var(--bg-alt)',
				'text': 'var(--text)',
				'accent': 'var(--accent)',
				'accent-alt': 'var(--accent-alt)',
				'accent-gradient': 'var(--accent-gradient)',
			},
		},
	},
	plugins: [],
}
