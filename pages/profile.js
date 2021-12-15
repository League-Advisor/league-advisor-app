import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

export default function profile() {
    return (

        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <Profile />
        </div>
    )
}
