import * as React from 'react';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql, Link} from "gatsby";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={"Posts"}>
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.frontmatter.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
      }, 
      id,
      excerpt
    }
  }
}
`

export const Head = () => <Seo title={"My Blog Posts"}/>

export default BlogPage