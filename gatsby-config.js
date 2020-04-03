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
        path: `${__dirname}/src/images/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
