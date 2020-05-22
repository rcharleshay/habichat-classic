const path = require('path')
const serviceAccount = require('./src/config/service-account.json')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://habi.chat',
    title: `Habichat`,
    description: `The #1 application for communicating with your neighbours.`,
    author: `Charles Hay`,
    social: {
      twitter: `habi_chat`
    }
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/gatsby-routes.js`
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: serviceAccount.apiKey,
          authDomain: serviceAccount.authDomain,
          databaseURL: serviceAccount.databaseURL,
          projectId: serviceAccount.projectId,
          storageBucket: serviceAccount.storageBucket,
          messagingSenderId: serviceAccount.messagingSenderId,
          appId: serviceAccount.appId,
          measurementId: serviceAccount.measurementId
        }
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        atoms: path.join(__dirname, 'src/atoms'),
        components: path.join(__dirname, 'src/components'),
        config: path.join(__dirname, 'src/config'),
        language: path.join(__dirname, 'src/language'),
        layouts: path.join(__dirname, 'src/layouts'),
        pages: path.join(__dirname, 'src/pages'),
        services: path.join(__dirname, 'src/services'),
        utils: path.join(__dirname, 'src/utils')
      }
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: `${__dirname}/src/services/redux`,
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`**/avatars`, `**/blog/**`, `**/dashboard`, `**/recaptcha`, `**/styleguide`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://habi.chat',
        sitemap: 'https://habi.chat/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: [`*/avatars`, `*/dashboard`, `*/recaptcha`, `*/styleguide`] }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-163462660-1',
        head: true,
        cookieDomain: 'habi.chat'
      }
    }
  ]
}
