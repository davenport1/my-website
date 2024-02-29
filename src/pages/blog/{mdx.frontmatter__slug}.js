import * as React from 'react';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
    const imageData = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <GatsbyImage alt={data.mdx.frontmatter.hero_image_alt} image={imageData}/>
            <p>
                Photo Credit:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
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
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}></Seo>

export default BlogPost;