module.exports = {
	siteMetadata: {
		title: `My Gatsby Site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: 'http://strapi:1337',
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
