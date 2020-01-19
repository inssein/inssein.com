module.exports = {
  siteMetadata: {
    title: "inssein",
    author: "Hussein Jafferjee",
    description: "Personal blog by Hussein Jafferjee",
    siteUrl: "https://inssein.com/",
    social: {
      mail: "hussein@jafferjee.ca",
      twitter: "1nssein",
      linkedIn: "hussein-jafferjee",
      github: "inssein",
    },
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-156494694-1",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "inssein",
        short_name: "inssein",
        start_url: "/",
        background_color: "#002b36",
        theme_color: "#002b36",
        display: "minimal-ui",
        icon: "content/assets/favicon.png",
      },
    },
    "gatsby-plugin-react-helmet-async",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
};
