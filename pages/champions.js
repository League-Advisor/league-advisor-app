import React, { useState } from 'react';
import Navbar from '../components/Navbar'
// import champion from 'public/static/champions'
import Image from 'next/image'

export default function champion() {
    const [index, setIndex] = useState()
    return (
        <div>
            <Navbar />

            <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <Image src="" />

                        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                            <span class="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                        </div>
                    </div>
                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>
                        <div class="pt-8 text-center">
                            <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
