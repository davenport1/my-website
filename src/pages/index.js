import * as React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout';
import {StaticImage} from "gatsby-plugin-image";
import Seo from '../components/seo';

// Home page for the site
const IndexPage = () => {
  return (
      <Layout pageTitle={"Home Page"}>
        <h1>Matthew Davenport</h1>
          <StaticImage src="../images/south-sister.png"
                       alt="Matthew after descending the dead clark glacier on South Sister"/>
          <Link to={'/about'}>About Me</Link>
        <p>
            <Link to={'/'}></Link>
            Programmer | Splitboarder | Painter | Gamer
        </p>

      </Layout>
  )
}

export const Head = () => <Seo title={"Home Page"}/>

export default IndexPage