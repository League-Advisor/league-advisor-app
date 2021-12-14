import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'


export default function Dashboard() {

    return (
        <main className="flex w-screen ">


            <video playsInline autoPlay loop muted className="absolute w-10/12 h-full -z-1" layout="fill" objectFit="cover" src="/Leona.webm" />

            <Navbar />
            <Cards />

        </main>
    )
}