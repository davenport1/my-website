// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle={"Home Page"}>
        <h1>Matthew Davenport</h1>
          <StaticImage src="../images/south-sister-profile-pic.jpg"
                       alt="Matthew after descending the dead clark glacier on South Sister"/>
          <Link to={'/about'}>About Me</Link>
        <p>
            <Link to={'/'}></Link>
            Programmer | Splitboarder | Painter | Gamer
        </p>

      </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Matthew Davenport</title>

// Step 3: Export your component
export default IndexPage