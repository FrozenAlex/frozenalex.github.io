// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.jsx", "./src/**/*.vue", "./src/**/*.tsx"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  siteMetadata: {
    title: `FrozenAlex`,
    author: {
      name: `FrozenAlex`,
      summary: `who likes to build stuff`,
    },
    description: `My blog built on gatsby`,
    siteUrl: `https://frozenalex.github.io/`,
    social: {
      twitter: `FrosteeAlex`,
      github: `FrozenAlex`,
      gitlab: `FrozenAlex`,
    },
  },
  plugins: [
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
              maxWidth: 1024,
              quality: 90,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-import")(), // Add support for sass-like '@import'
          require("postcss-extend")(), // Add support for sass-like '@extend'
          require("postcss-nesting")(), // Add support for sass-like nesting of rules
          require("postcss-simple-vars")(), // Sass variables
          require("tailwindcss"),
          require("postcss-color-function")(), // add color functions
          ...(process.env.NODE_ENV === "production"
            ? [
                // If not dev then build with these
                purgecss,
                require(`postcss-preset-env`)({
                  stage: 0,
                }),
              ]
            : []),
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
  ],
}
