module.exports = {
  siteMetadata: {
    title: `MachineServant`,
    description: `Make the machines work for you! Let us help you build your next web site or application.`,
    author: `@suriansg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MachineServant`,
        short_name: `MachineServant`,
        start_url: `/`,
        background_color: `#c8c8c8`,
        theme_color: `#c8c8c8`,
        display: `minimal-ui`,
        icon: `src/images/machineservant-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-less`,
    `gatsby-background-image`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
