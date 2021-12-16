import React from 'react'
import Head from 'next/head'
import ItemsBrowser from '../components/ItemBrowser'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/auth'
import Login from '../components/Login'

export default function itemsbrowser() {
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
                    <ItemsBrowser user = {user}/>
                </>
                : <Login login={login} />
            }
        </div>

    )






}