import React from 'react'
import Head from 'next/head'

export default function dashboard() {

    return (

        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Dashboard />
        </div>

    )
}