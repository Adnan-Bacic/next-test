import React from 'react';
import Link from "next/link";
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
            <Link href="/">home</Link>
        </div>
    );
};

export default About;
