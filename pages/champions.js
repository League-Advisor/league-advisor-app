import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Champion from '../components/championsbrowse';

export default function champion() {

    return (
        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <Champion />

        </div>
    )
}