import * as React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout';
import {StaticImage} from "gatsby-plugin-image";
import Seo from '../components/seo';

import {
    container,
    title,
    descriptors,
    mainImage
} from './index.module.css'
import ImageFrame from "../components/imageFrame";

// Home page for the site
const IndexPage = () => {
  return (
      <Layout pageTitle={"Welcome!"}>
          <div className={container}>
              <p className={descriptors}>
                  <Link to={'/'}></Link>
                  Programmer | Splitboarder | Gamer | Guitarist
              </p>
              <StaticImage src="../images/south-sister.png"
                           alt="Matthew after descending the dead clark glacier on South Sister"
                           className={mainImage}/>
              <ImageFrame src={"../images/south-sister.png"}
                          alt={"Matthew after descending the dead clark glacier on South Sister"}
                          caption={"Descending the Clark Glacier on South Sister"}></ImageFrame>
              <Link to={'/about'}>About Me</Link>
          </div>
      </Layout>
  )
}

export const Head = () => <Seo title={"Home Page"}/>

export default IndexPage