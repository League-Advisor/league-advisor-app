import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

export default function Dashboard() {

    return (
        <main>
            <div className="flex bg-gray-100">
                <Navbar />
                <Cards />
            </div>
        </main>
    )
}
