import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import SoloChampion from '../components/SoloChampion'
import { useAuth } from '../contexts/auth'
import Login from '../components/Login'


export default function solochampion() {

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
            <SoloChampion />
           </>
            :<Login login = {login}/>
            }
        </div>
    )
}
