import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Items from '../components/ItemBrowse'

export default function items() {
    return (
        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <Items />
        </div>
    )
}