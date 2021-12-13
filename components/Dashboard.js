import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'


export default function Dashboard() {

    return (
        <main className="w-screen">
            <div className="flex">

                <video playsInline autoPlay loop muted className="absolute w-screen h-screen -z-1" layout="fill" objectFit="cover" src="/Leona.webm" />

                <Navbar />
                <Cards />
            </div>
        </main>
    )
}