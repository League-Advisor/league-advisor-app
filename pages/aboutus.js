import React from 'react'
import AboutUs from '../components/AboutUs'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/auth'
import Login from '../components/Login'

export default function aboutus() {
    const { user, login } = useAuth()

    return (
        <div className="flex">
            <Head>
            <title>League Advisor</title>
        <link rel="icon" href="/favicon.png" />
            </Head>




            {user ?
                <>
                    <Navbar user = {user}/>
                    <AboutUs user = {user}/>
                </>
                : <Login login={login} />
            }
        </div>
    )
}

