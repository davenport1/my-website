import * as React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
    /*  Use the useStaticQuery hook and graphql tag to query for data
      (The query gets run at build time) */
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
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
        </header>
    )
}

export default Header;