import React from 'react'
import Head from 'next/head'
import ChampionsBrowser from '../components/ChampionsBrowser'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/auth'
import Login from '../components/Login'

export default function signup() {
    const { user, login } = useAuth()

    return (
        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            {user ?
                <>
            <Navbar />
            <ChampionsBrowser />
                </>
                : <Login login={login} />
            }

        </div>
    )
}





       