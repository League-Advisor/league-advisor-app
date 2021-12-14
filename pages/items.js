import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Items() {
    return (
        <div>
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
        </div>
    )
}