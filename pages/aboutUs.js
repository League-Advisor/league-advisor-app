import React from 'react'
import Navbar from '../components/Navbar'
import AboutUsCards from '../components/AboutUsCards'

import Head from 'next/head'

export default function aboutUs() {
    return (
        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            {/* <video playsInline autoPlay loop muted className="absolute w-screen h-screen -z-1" layout="fill" objectFit="cover" src="/Galio.webm" /> */}

            <Navbar />
            <AboutUsCards />

        </div>
    )
}