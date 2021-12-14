import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Profile from '../components/Profile'

export default function profile() {
    return (
        <div>
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <Profile />
        </div>
    )
}