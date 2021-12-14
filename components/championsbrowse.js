import React, { useState } from "react";
import { championnamse } from '../public/static/data'
import Image from "next/image";
import axios from 'axios'

export default function Champion() {
    const [item, setitem] = useState("")
    const [showModal, setShowModal] = useState(false);
    const [championData, setchampionData] = useState(null);

    async function championdatainfo(value) {
        const championUrl = `http://127.0.0.1:8000/champions/`
        let response = await axios.get(`${championUrl}${value}`)

        let resData = {
            "name": response.data.name,
            "title": response.data.title,
            "lore": response.data.lore,
            "attack": response.data.attack,
            "defense": response.data.defense,
            "magic": response.data.magic,
            "image": response.data.image,
            "tags": response.data.tags,
            "skills": response.data.skills
        }

        setchampionData(resData)
    }

    const content_bg = {
        "background-image": "url('https://i.pinimg.com/originals/69/58/10/6958108311fb163d1f0b4f575dab67e4.gif')",
        "background-size": "cover",
        "border-radius": "10px"
    }


    return (
        <>
            <div className="grid w-full grid-cols-4 grid-rows-5 gap-2 mt-20 rounded-lg " style={content_bg} >
                {championnamse.map((item, idx) => {
                    return (
                        <div className="flex justify-center mt-4 duration-150 transform bg-gray-400 rounded-lg shadow-lg ml-14 w-52 bg-opacity-30 hover:bg-gray-100 hover:bg-opacity-100 transision hover:-translate-y-2" key={idx}>
                            <button onClick={() => { setitem(item); setShowModal(true); championdatainfo(championnamse.indexOf(item)) }} className="m-2 bg-gray-500 rounded-lg shadow-2xl hover:bg-gray-700">
                                <Image className="rounded-lg"
                                    src={`/static/images/champion/${item}.png`}
                                    alt='universe'
                                    width={150}
                                    height={170}
                                />
                            </button>
                        </div>
                    )
                })}

                {showModal && championData ? (<>
                    <div className="fixed inset-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" >
                        <div className="relative w-auto max-w-2xl mx-auto mb-12 mt-72">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-2xl outline-none focus:outline-none">
                                {/*header*/}
                                <p className="mt-2 ml-4 font-semibold">{championData["title"]}</p>
                                <div className="flex items-start justify-center p-5 border-b border-solid rounded-t border-blueGray-200">
                                    <h3 className="text-3xl font-semibold">
                                        {item}
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
                                    <div className="block mx-auto mt-2 bg-gray-500 rounded-lg shadow-2xl w-62 justify-conter">
                                        <Image className="bg-gray-500 rounded-lg shadow-2xl"
                                            src={`${championData["image"]}`}
                                            alt='league champions'
                                            width={308}
                                            height={380}
                                        />
                                    </div>
                                }
                                <div className="relative flex-auto p-6 text-justify">
                                    <p className="my-4 text-lg leading-relaxed text-blueGray-500">
                                        {championData["lore"]}
                                    </p>
                                </div>
                                <div className="flex w-8/12 mx-auto border-t border-solid rounded-b border-blueGray-200">
                                    {/* champion props */}
                                    <p className="block ml-20 font-semibold">Magic: {championData["magic"]}</p>
                                    <p className="block ml-12 font-semibold ">Defense: {championData["defense"]}</p>
                                    <p className="block ml-12 font-semibold ">Attack: {championData["attack"]}</p>
                                </div>
                                <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-blueGray-200">
                                    {/* champion tags */}
                                    <h2 className="font-bold">Tags</h2>
                                    <br />
                                    <p>{championData["tags"]}</p>
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
                </>) : <></>}
            </div>
        </>
    )
}