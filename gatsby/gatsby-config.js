require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: `My Gatsby Site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: process.env.GATSBY_API_URL,
				apiURL: 'http://localhost:1337',
				collectionTypes: [
					{
						singularName: 'page',
					},
				],
				queryLimit: 1000,
			},
		},
	],
}
