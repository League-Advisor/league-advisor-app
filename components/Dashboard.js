import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

export default function Dashboard() {

    return (
        <>
            <div className="top-0 flex ">
                <Navbar />


                <video playsInline autoPlay loop muted className="absolute top-0 right-0 w-10/12 h-screen " layout="fill" objectFit="cover" src="/Leona.webm" />

                <div className="z-0 grid w-10/12 grid-cols-2 grid-rows-2 pl-4 h-top-0 right-2">

                    <div className="flex justify-center w-8/12 h-48 mt-24 rounded-lg shadow-2xl ml-44 bg-white/50 z-1 ">
                        <Link className="w-full" href='/champions'>
                            <a className="justify-center pt-16 font-sans text-5xl font-bold text-center text-black ">Champions</a>
                        </Link>
                    </div>

                    <div className="flex justify-center w-8/12 h-48 mt-24 rounded-lg bg-white/50 z-1">
                        <Link className="w-full" href='/items'>
                            <a className="justify-center pt-16 font-sans text-5xl font-bold text-center text-black ">Items</a>
                        </Link>
                    </div>

                    <div className="flex justify-center w-8/12 h-48 mt-24 text-white rounded-lg shadow-2xl ml-44 bg-white/50 z-1">
                        <Link className="w-full" href='#'>
                            <a className="justify-center pt-16 font-sans text-5xl font-bold text-center text-black ">Item Browser</a>
                        </Link>
                    </div>

                    <div className="flex justify-center w-8/12 h-48 mt-24 rounded-lg shadow-2xl bg-white/50 z-1">
                        <Link className="w-full" href='#'>
                            <a className="justify-center pt-16 font-sans text-5xl font-bold text-center text-black">Champion Browser</a>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}