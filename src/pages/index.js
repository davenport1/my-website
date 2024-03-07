import * as React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ImageFrame from "../components/imageFrame";
import {StaticImage} from "gatsby-plugin-image";

import {
    container,
    title,
    descriptors,
    mainImage
} from './index.module.css'

import SouthSisterImage from '../images/south-sister.png';

// Home page for the site
const IndexPage = () => {
  return (
      <Layout pageTitle={"Welcome!"}>
          <div className={container}>
              <p className={descriptors}>
                  <Link to={'/'}></Link>
                  Programmer | Splitboarder | Gamer | Guitarist
              </p>
              <ImageFrame caption={"Descending the Clark Glacier on South Sister"}>
                  <StaticImage src="../images/south-sister.png"
                               alt="Matthew after descending the dead clark glacier on South Sister"
                               className={mainImage}/>
              </ImageFrame>
              <Link to={'/about'}>About Me</Link>
          </div>
      </Layout>
  )
}

export const Head = () => <Seo title={"Home Page"}/>

export default IndexPage