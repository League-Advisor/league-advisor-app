import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import Link from 'next/link'

export default function Navbar() {
    const { user, login, logout } = useAuth()

    const router = useRouter()

    function Logout() {
        localStorage.clear()
        location.reload();
        // router.push("/")
    }
    
    return (

        <>
            <nav className="sticky top-0 z-0 flex-col justify-between w-2/12 h-screen rounded-md ">
                <div className="w-full h-full bg-black ">
                    <div className="flex justify-center py-20 pr-4 shadow-sm">
                        <Image src="/logo.png" width="140" height="140" alt="logo" />

                    </div>
                    <div className="pl-10">
                        <ul className="pt-8 space-y-12">
                            {/* Profile */}
                            <li className="flex items-center space-x-4 text-3xl text-white cursor-pointer hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>

                                <button className="font-bold" type="button" onClick={() => router.push('/profile')}>
                                    Profile
                                </button>
                            </li>
                            {/* Dashboard */}
                            <li className="flex items-center space-x-4 text-3xl text-white cursor-pointer hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 " fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>

                                <button className="font-bold" type="button" onClick={() => router.push('/')}>
                                    Dashboard
                                </button>
                            </li>
                            {/* About Us */}
                            <li className="flex items-center space-x-4 text-3xl text-white cursor-pointer hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>

                                <button className="font-bold" type="button" onClick={() => router.push('/aboutus')}>
                                    About Us
                                </button>
                            </li>
                            {/* Logout */}
                            <li className="flex items-center space-x-4 text-3xl text-white cursor-pointer hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <button onClick={() => { Logout() }}>
                                    Logout
                                </button>
                                {/* <button type="button" onClick={logout, router.push('/')}>

                                </button> */}
                            </li>
                        </ul>
                    </div>


                </div>


            </nav>
        </>
    )
}