import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import PatchNotes from '../components/PatchNotes'
import { useAuth } from '../contexts/auth'
import Login from '../components/Login'

export default function patchNotes() {
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
                    <PatchNotes user = {user}/>
                </>
                : <Login login={login} />
            }
        </div>
    )
}
