import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
    return (
        <>
            <nav className="flex-col justify-between h-screen rounded-md w-72">
                <div className="h-full bg-gray-900">
                    <div className="flex justify-center py-10 pr-4 shadow-sm">
                        <Image src="/static/images/plagiarized-logo.png" width="75" height="75" alt="logo" />
                        {/* <div className="pl-2">
                        <span className="block text-xs text-white">League Advisor</span>
                    </div> */}
                    </div>
                    <div className="pl-10">
                        <ul className="pt-10 space-y-8">
                            {/* Profile */}
                            <li className="flex items-center space-x-4 text-white cursor-pointer hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                <Link href="/profile" >Profile</Link>
                            </li>
                            {/* Dashboard */}
                            <li className="flex items-center space-x-4 text-white cursor-pointer hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>

                                <Link href="/dashboard">Dashboard</Link>

                            </li>
                            {/* Patch Notes */}
                            <li className="flex items-center space-x-4 text-white cursor-pointer hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <Link href="/patchNotes">Patch Notes</Link>
                            </li>
                            {/* About Us */}
                            <li className="flex items-center space-x-4 text-white cursor-pointer hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <Link href="/aboutUs">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Logout */}
                </div>
                <div className="flex items-center pb-10 pl-10 space-x-4 text-white bg-gray-900 cursor-pointer hover:text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <Link href="/loguot">Logout</Link>
                </div>
            </nav>
        </>
    )
}

