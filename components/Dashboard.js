import React from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'



export default function Dashboard() {
    const router = useRouter()
    return (
        <div className='flex h-screen bg-black'>

            <video playsInline autoPlay loop muted className="flex pl-56 z-2 h-100" src="/Leona.webm" />

            <div className="absolute left-0 z-0 flex w-full h-screen" >

                <Navbar />
                <div className="grid grid-cols-2 grid-rows-2 pt-16 z-1 gap-x-80">

                    <div className="z-0 flex justify-center w-full h-48 mt-24 rounded-lg shadow-2xl ml-28 bg-white/50 text-black/50 hover:bg-white/75 hover:text-black/75 active:bg-white/25 active:text-black ">
                        <button type="button" onClick={() => router.push('/championsbrowser')}>
                            <a data-testid="extra-link" className="justify-center pt-16 font-sans text-5xl font-bold text-center ">Champions Browser</a>

                        </button>
                    </div>

                    <div className="flex justify-center w-full h-48 mt-24 rounded-lg bg-white/50 z-1 text-black/50 hover:bg-white/75 hover:text-black/75 active:bg-white/25 active:text-black">
                        <button data-testid="btn" type="button" onClick={() => router.push('/itemsbrowser')}>
                            <a className="justify-center pt-16 font-sans text-5xl font-bold text-center ">Items Browser</a>
                        </button>
                    </div>

                    <div className="flex justify-center w-full h-48 mt-24 text-white rounded-lg shadow-2xl ml-28 bg-white/50 z-1 text-black/50 hover:bg-white/75 hover:text-black/75 active:bg-white/25 active:text-black ">
                        <button type="button" onClick={() => router.push('/solochampion')}>
                            <a className="justify-center pt-16 font-sans text-5xl font-bold text-center ">Solo Champion</a>

                        </button>
                    </div>

                    <div className="flex justify-center w-full h-48 mt-24 rounded-lg shadow-2xl bg-white/50 z-1 text-black/50 hover:bg-white/75 hover:text-black/75 active:bg-white/25 active:text-black ">

                        <button type="button" onClick={() => router.push('/patchNotes')}>
                            <a className="justify-center pt-16 font-sans text-5xl font-bold text-center ">Patch Notes</a>

                        </button>

                    </div>

                </div>
            </div>



        </div>
    )
}