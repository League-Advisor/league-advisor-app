import React, { useState } from "react";
import { itemsnumbers } from '../public/static/data'
import Image from "next/image";
import axios from 'axios'


export default function Items() {
    const [showModal, setShowModal] = useState(false);
    const [iteminfo, setiteminfo] = useState(null);

    async function itemsinfo(value) {
        const itemUrl = `http://127.0.0.1:8000/items/`
        let response = await axios.get(`${itemUrl}${value}`)

        let resData = {
            "name": response.data.name,
            "description": response.data.description,
            "gold": response.data.gold,
            "image": response.data.image,
            "tags": response.data.tags
        }

        await setiteminfo(resData)
        console.log(iteminfo);
    }

    const content_bg = {
        "background-image": "url('https://i.pinimg.com/originals/69/58/10/6958108311fb163d1f0b4f575dab67e4.gif')",
        "background-size": "cover",
        "border-radius": "10px"
    }


    return (
        <>
            <div className="grid w-full grid-cols-9 grid-rows-4 " style={content_bg} >
                {itemsnumbers.map((item, idx) => {
                    return (
                        <div className="flex justify-center mt-2 ml-4 duration-150 transform bg-gray-400 rounded-lg shadow-lg w-28 bg-opacity-30 hover:bg-gray-100 hover:bg-opacity-100 transision hover:-translate-y-2" key={idx}>
                            <button onClick={() => { setShowModal(true); itemsinfo(item) }} className="m-2 bg-gray-500 rounded-lg shadow-2xl hover:bg-gray-700">
                                <Image className="rounded-lg"
                                    src={`/static/images/item/${item}.png`}
                                    alt='universe'
                                    width={150}
                                    height={150}
                                />
                            </button>
                        </div>
                    )
                })}

                {showModal && iteminfo ? (<>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" >
                        <div className="relative w-full max-w-2xl mx-auto my-6 mt-96 mb-36">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-center p-5 border-b border-solid rounded-t border-blueGray-200">
                                    <h3 className="text-3xl font-semibold " >
                                        {/* {title} */}
                                        {iteminfo["name"]}
                                    </h3>
                                    <button
                                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/
                                    <div className="block mx-auto mt-2 rounded-lg w-52 justify-conter">
                                        <Image className="bg-gray-500 rounded-lg shadow-2xl"
                                            src={iteminfo["image"]}
                                            alt='universe'
                                            width={160}
                                            height={170}
                                        />
                                    </div>
                                }
                                <div className="relative flex-auto p-6 text-justify">
                                    <p className="my-4 text-lg leading-relaxed text-blueGray-500">
                                        {iteminfo["description"]}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center p-1 border-t border-solid rounded-b border-blueGray-200">
                                    {/* item gold */}
                                    <h2 className="font-bold">Gold:   ({iteminfo["gold"]})</h2>
                                </div>
                                <div className="flex justify-center w-8/12 mx-auto border-t border-solid rounded-b border-blueGray-200">
                                    {/* champion props */}
                                    <p className="block font-bold">Tags:   {iteminfo["tags"]}</p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                                    <button
                                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>) : null}
            </div>
        </>
    )
}