import React from 'react'
import Login from '../components/Login'
import Head from 'next/head'

export default function login() {
    return (
        <div >
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Login />


        </div>
    )
}
