/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: process.env.BUILD_ENV ? `.env.${process.env.BUILD_ENV}` : `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/*"],
      },
    },
  ],
}
