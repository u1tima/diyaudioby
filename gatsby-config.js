/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/diyaudioby",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `diyAudio`,
        icon: `src/images/favicon.png`,
      },
    },
  ]
}
