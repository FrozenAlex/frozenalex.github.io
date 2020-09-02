// postcss.config.js
// const purgecss = require("@fullhuman/postcss-purgecss")({
//   // Specify the paths to all of the template files in your project
//   content: ["./src/**/*.jsx", "./src/**/*.vue", "./src/**/*.tsx"],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
// })

module.exports = {
	siteMetadata: {
		title: `FrozenAlex`,
		titleTemplate: "%s · FrozenAlex",
		author: {
			name: `Alex Uskov`,
			summary: `Fullstack web developer`,
		},
		description: `Personal website/portfolio`,
		url: `https://alexx.ml`,
		siteUrl: `https://alexx.ml`,
		image: "",
		social: {
			twitter: `@FrosteeAlex`,
			github: `FrozenAlex`,
			gitlab: `FrozenAlex`,
		},
	},
	plugins: [
		{
			resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
			options: {
				analyzerMode: process.env.ANALYZE ? "server" : "disabled",
				analyzerPort: "8888",
				defaultSizes: "gzip",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1920,
							quality: 87,
							withWebp: true,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},

					{
						resolve: `gatsby-remark-prismjs`,
						options: {},
					},
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		{
			resolve: `gatsby-transformer-sharp`,
			options: {
				// The option defaults to true
				// checkSupportedExtensions: false,
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: true,
				stripMetadata: true,
				defaultQuality: 80,
				webpQuality: 90,
				maxWidth: 1920,
				srcSetBreakpoints: [200, 340, 520, 890, 1366, 1920],
				toFormat: "WEBP",
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-54839307-2`,
			},
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `FrozenAlex Blog`,
				short_name: `FrozenBlog`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`,
			},
		},
		`gatsby-plugin-react-helmet`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		//`gatsby-plugin-offline`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-tsconfig-paths`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				cssLoaderOptions: {
					modules: false,
					exportLocalsConvention: "camelCase",
				},
				postCssPlugins: [
					...(process.env.NODE_ENV === "production"
						? [
								// If not dev then build with these
								// purgecss,
								require(`postcss-preset-env`)({
									stage: 0,
								}),
								require("cssnano")(),
						  ]
						: []),
				],
			},
		},
	],
}
