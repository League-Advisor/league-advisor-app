import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import { useAuth } from '../contexts/auth'
import Login from '../components/Login'
export default function profile() {

    const { user, login } = useAuth()

    return (

        <div className="flex">
            <Head>
                <title>League Advisor</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            {user?
            <>
            <Navbar />
            <Profile />
            </>
            :<Login login = {login}/>
            }
        </div>
    )
}
