import React from 'react'
import AboutUs from '../components/AboutUs'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function aboutus() {
    return (
        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <AboutUs />
        </div>
    )
}

