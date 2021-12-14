import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import PatchNotes from '../components/PatchNotes'

export default function patchNotes() {
    return (
        <div>
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <PatchNotes />
        </div>
    )
}