import * as React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";

import {
    textLink,
    textBlock,
    textSection,
    aboutHeader
} from './about.module.css'

import {
    container
} from './index.module.css'
import {Fragment} from "react";

const About = () => {
    return (
        <Layout pageTitle={"About"}>
            <div className={container}>
                <div className={aboutHeader}>
                    <h1>About Me</h1>
                </div>
                <div className={textSection}>
                    <p className={textBlock}>
                        Hello web surfer. By trade I am a (primarily) backend software engineer currently working at
                        Paladin Data Corporation in Bend, Oregon. Professionally I
                        develop using the .NET ecosystem and have experience in ASP.NET Core, Entity Framework Core,
                        .NET Framework, MAUI cross platform development, Blazor front-end web development,
                        and use PostgreSQL and SQL Server for a database engine.
                    </p>
                    <p className={textBlock}>
                        At home I enjoy working with a multitude of tech stacks and have dabbled a lot as I find what
                        really
                        speaks to me. I use Rust for learning more embedded programming, Go for a web api to serve an
                        app I
                        am currently working on, and React for web development, particularly gatsby which is what this
                        site
                        is made with!
                    </p>
                    <p className={textBlock}>
                        When I'm not in the office, you'll find me in the mountains, whether at the local Mt Bachelor
                        ski
                        resort,
                        or earning my turns on one of the many accessible peaks in Central Oregon. If I'm not in the
                        office
                        or
                        working on a coding project at home, I'll probably be trying to keep my turns all year streak
                        going
                        in the Cascades.
                    </p>
                    <p className={textBlock}>
                        Browse around to find out more about either my professional aspirations, or personal hobby
                        pursuits!
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title={"About Me"}/>

export default About;