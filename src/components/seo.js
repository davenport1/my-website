import * as React from 'react';
import { graphql, useStaticQuery } from "gatsby";

// Search engine optimizations
const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <title>{title} | {data.site.siteMetadata.title}</title>
    )
}

export default Seo