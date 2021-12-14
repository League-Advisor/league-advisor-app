import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'


export default function Dashboard() {

    return (
        <>
            <div className="flex">
                <Navbar />

                <video playsInline autoPlay loop muted className="w-10/12 h-full " layout="fill" objectFit="cover" src="/Leona.webm" />

                {/* <Cards /> */}


            </div>
        </>
    )
}