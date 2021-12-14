import React from 'react'
import Signup from '../components/Signup'
import Head from 'next/head'

export default function signup() {
    return (
        <div >
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Signup />
        </div>
    )
}
