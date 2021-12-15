import React from 'react'
import Head from 'next/head'
import ItemsBrowser from '../components/ItemBrowser'
import Navbar from '../components/Navbar'

export default function itemsbrowser() {
    return (

        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <ItemsBrowser />
        </div>

    )
}
