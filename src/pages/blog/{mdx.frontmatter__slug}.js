import * as React from 'react';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from "gatsby";

const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </Layout>
    )
}

// passed into the page component as a prop named 'data' from the page query
// children prop will be the actual mdx content
export const query = graphql`
    query($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}></Seo>

export default BlogPost;