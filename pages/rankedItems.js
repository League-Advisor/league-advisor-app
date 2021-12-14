import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import RankedItems from '../components/RankedItems'

export default function rankedItems() {
    return (
        <div>
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <RankedItems />
        </div>
    )
}