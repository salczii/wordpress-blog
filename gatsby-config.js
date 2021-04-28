module.exports = {
  siteMetadata: {
    title: "gatsby-wp-blog",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://gatsbyblogwp.local/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `jpg`,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
  ],
};
