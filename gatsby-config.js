module.exports = {
  siteMetadata: {
    title: "Lifted Blog!",
    author: "Anshul Sharma, Lifted Solutions Inc.",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
