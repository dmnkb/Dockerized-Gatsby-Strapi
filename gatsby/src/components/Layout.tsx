import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type LayoutProps = {
	readonly children: ReactNode
	readonly pageType: 'index' | 'page' | 'post'
}

const Layout: React.FC<LayoutProps> = ({ pageType, children }) => {
	const staticPageData = useStaticQuery(graphql`
		query StaticPageQuery {
			allStrapiPage {
				edges {
					node {
						id
						Title
						Content {
							data {
								id
							}
						}
					}
				}
			}
		}
	`)

	console.log(staticPageData)

	return <main>{children}</main>
}

export default Layout
