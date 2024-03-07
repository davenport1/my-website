import * as React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    navContainer,
    mainContent,
    introSentence
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
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
        <div className={container}>
            <div className={navContainer}>
                <header className={siteTitle}>Matthew Davenport</header>
                <p className={introSentence}>Balancing a life between tech and getting goofy in the beautiful cascades.</p>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to={"/"} className={navLinkText}>Home</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to={"/about"} className={navLinkText}>About</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to={"/blog"} className={navLinkText}>Blog</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to={"/"} className={navLinkText}>Projects</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <main className={mainContent}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;