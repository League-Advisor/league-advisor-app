import React from 'react'
import Head from 'next/head'
import ChampionsBrowser from '../components/ChampionsBrowser'
import Navbar from '../components/Navbar'

export default function signup() {
    return (
        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <ChampionsBrowser />

        </div>
    )
}
