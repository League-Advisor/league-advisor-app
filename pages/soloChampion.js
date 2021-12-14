import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import SoloChampion from '../components/SoloChampion'

export default function soloChampion() {
    return (
        <div>
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <SoloChampion />
        </div>
    )
}