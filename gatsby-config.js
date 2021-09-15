module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: 'https://example.drupalsite.com',
        languageConfig: {
          defaultLanguage: 'en',
          enabledLanguages: ['en', 'es'],
          translatableEntities: [
            'node--article',
          ],
        }
      }
    }
  ],
}
