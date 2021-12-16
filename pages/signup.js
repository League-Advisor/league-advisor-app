import React from 'react'
import Head from 'next/head'
import Signup from '../components/Signup'

export default function signup() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
            <title>League Advisor</title>
        <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <Signup />
            </main>
        </div>
    )
}
