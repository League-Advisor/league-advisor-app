import React from 'react'
import Link from 'next/link'

export default function Cards() {
    return (
        <>

            <div className="z-0 ">
                <div class="w-70 py-4 px-8 bg-black shadow-lg  my-40">

                    <div >
                        <Link href='/champions'>
                            <a class="text-white text-3xl text-center font-bold">Champions</a>
                        </Link>


                    </div>

                </div>
                <div class="w-70 py-4 px-8 bg-black shadow-lg  my-20 ">

                    <div>
                        <Link href='/items'>
                            <a class="text-white text-3xl  text-center font-bold">Items</a>
                        </Link>

                    </div>

                </div>
            </div>
            <div className="z-0 items-center m-20">
                <div class="w-70 py-4 px-10 bg-black shadow-lg my-40">

                    <div>
                        <Link href='/soloChampion'>
                            <a class="text-white text-3xl  text-center font-bold">Solo Champion</a>
                        </Link>

                    </div>

                </div>
                <div class="w-70  py-4 px-8 bg-black shadow-lg  my-20">

                    <div>
                        <Link href='/rankedItems'>
                            <a class="text-white text-3xl  text-center font-bold">Ranked Items</a>
                        </Link>

                    </div>


                </div>

            </div>

        </>
    )
}