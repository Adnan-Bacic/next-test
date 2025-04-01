import React from 'react';
import Head from 'next/head'

const About = () => {
    return (
        <div>
            <Head>
                <title>about</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="about description" />
            </Head>
            <h1>about</h1>
            <button className="btn btn-primary">Primary Button</button>
        </div>
    );
};

export default About;
