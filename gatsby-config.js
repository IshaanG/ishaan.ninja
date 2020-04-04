module.exports = {
  siteMetadata: {
    title: `Ishaan Gupta`,
    description: `Ishaan Gupta's personal website.`,
    author: `Ishaan Gupta`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ishaan Gupta`,
        short_name: `ishaan`,
        start_url: `/`,
        background_color: `#d4d4d4`,
        theme_color: `#181818`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/images/icon.png`,
        cache_busting_mode: "none",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
