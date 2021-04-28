module.exports = {
  siteMetadata: {
    title: "gatsby-wp-blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "gatsbyblogwp.local",
      },
    },
  ],
};