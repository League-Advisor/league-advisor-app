import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import SoloChampion from '../components/SoloChampion'

export default function solochampion() {
    return (

        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <SoloChampion />
        </div>
    )
}
