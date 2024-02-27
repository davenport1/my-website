import * as React from 'react';

const About = () => {
    return (
        <main>
            <h1>About Me</h1>
            <p>
                Hello web surfer. I'm Matt and welcome to my site! By trade I am a (primarily) backend
                software engineer currently working at Paladin Data Corporation in beautiful Bend, Oregon.
                When I'm not in the office, you'll find me in the mountains, whether at the local Mt Bachelor ski resort,
                or earning my turns on one of the many accessible peaks in Central Oregon. Browse around to find out more
                about either my professional aspirations, or personal hobby pursuits!
            </p>
        </main>
    )
}

export const Head = () => <title>About Me</title>

export default About;