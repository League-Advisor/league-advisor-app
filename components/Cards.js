import React from 'react'
import Link from 'next/link'

export default function Cards() {
    return (
        <>
            <div className="flex flex-col">
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">

                    <div>
                        <Link href='/champions'>
                            <a class="text-gray-800 text-3xl  text-center font-semibold">Champions</a>
                        </Link>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                    </div>

                </div>
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">

                    <div>
                        <Link href='/items'>
                            <a class="text-gray-800 text-3xl  text-center font-semibold">Items</a>
                        </Link>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col">
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">

                    <div>
                        <Link href='/soloChampion'>
                            <a class="text-gray-800 text-3xl  text-center font-semibold">Solo Champion</a>
                        </Link>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>

                </div>
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">

                    <div>
                        <Link href='/rankedItems'>
                            <a class="text-gray-800 text-3xl  text-center font-semibold">Ranked Items</a>
                        </Link>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>

                </div>
            </div>

        </>
    )
}
