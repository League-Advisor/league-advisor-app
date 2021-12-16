import React, { useState } from "react";
import { championnamse } from '../public/static/data'
import Image from "next/image";
import axios from 'axios'
import championKeys from "../public/static/championKeys";

const championUrl = process.env.NEXT_PUBLIC_CHAMPIONS_BROWSER_URL

export default function ChampionsBrowser({user}) {
    const [item, setitem] = useState("")
    const [showModal, setShowModal] = useState(false);
    const [championData, setchampionData] = useState(null);

    async function championdatainfo(value) {
        let response = await axios.get(`${championUrl}${value}`)

        let resData = {
            "key": response.data.key,
            "name": response.data.name,
            "champion_id": response.data.champion_id,
            "title": response.data.title,
            "lore": response.data.lore,
            "attack": response.data.attack,
            "defense": response.data.defense,
            "magic": response.data.magic,
            "difficulty": response.data.difficulty,
            "image": response.data.image,
            "tags": response.data.tags,
            "skills": response.data.skills
        }

        setchampionData(resData)
    }

    const content_bg = {
        "background-size": "cover",

    }


    return (
        <>
            <div className="w-full bg-gray-900 ">
                <h1 className="pb-10 mt-8 font-mono font-bold text-center text-white text-7xl">Champion Browser</h1>
                <div className="top-0 grid w-10/12 grid-cols-9 grid-rows-5 mt-1 ml-auto mr-auto bg-gray-900" style={content_bg} >
                    {championnamse.map((item, idx) => {
                        return (
                            <div className="flex justify-center mt-4 ml-6 duration-150 transform bg-gray-400 rounded-lg shadow-lg bg-opacity-30 hover:bg-gray-100 hoverbg-opacity-100 transision hover:-translate-y-2" key={idx}>
                                <button onClick={() => { setitem(item); setShowModal(true); championdatainfo(championnamse.indexOf(item)) }} className="m-1 bg-gray-500 rounded-lg shadow-2xl hover:bg-gray-700">
                                    <Image className="rounded-lg"
                                        src={`/static/images/champion/${item}.png`}
                                        alt='universe'
                                        width={150}
                                        height={150}
                                    />
                                </button>
                            </div>
                        )
                    })}

                    {showModal && championData ? (<>
                        <div className="fixed inset-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" >
                            <div className="relative w-auto max-w-2xl mx-auto mt-40 mb-12 left-40">
                                {/*content*/}
                                <div className="relative flex flex-col w-full border-0 rounded-lg shadow-2xl outline-none bg-white/90 focus:outline-none">
                                    {/*header*/}
                                    <p className="mt-2 ml-4 text-lg font-bold">{championData["title"]}</p>
                                    <div className="flex items-start justify-center p-5 border-b border-solid rounded-t border-blueGray-200 ">
                                        <h3 className="text-4xl font-bold ">
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
                                                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championKeys[championData["key"]]}_0.jpg`}
                                                alt={`${championData["name"]}`}
                                                width={308}
                                                height={560}
                                            />
                                        </div>
                                    }
                                    <div className="relative flex-auto p-6 text-justify">
                                        <p className="my-4 text-xl font-semibold leading-relaxed text-blueGray-500">
                                            {championData["lore"]}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center w-8/12 mx-auto border-t border-solid rounded-b border-blueGray-200">
                                        {/* champion props */}
                                        <p className="items-center justify-center block mx-8 font-semibold">
                                            Magic<br />
                                            <Image
                                                src='/static/images/StatMods/StatModsAdaptiveForceIcon.png'
                                                alt='Magic'
                                                width={32}
                                                height={32}
                                            /><br />
                                            {championData["magic"]}/10 </p>
                                        <p className="items-center justify-center block mx-8 font-semibold">
                                            Defense<br />
                                            <Image
                                                src='/static/images/StatMods/StatModsArmorIcon.png'
                                                alt='Defense'
                                                width={32}
                                                height={32}
                                            /><br />
                                            {championData["defense"]}/10</p>
                                        <p className="items-center justify-center block mx-8 font-semibold">
                                            Attack<br />
                                            <Image
                                                src='/static/images/StatMods/StatModsAttackSpeedIcon.png'
                                                alt='Attack'
                                                width={32}
                                                height={32}
                                            /><br />
                                            {championData["attack"]}/10</p>
                                        <p className="items-center justify-center block mx-8 font-semibold">
                                            Difficulty<br />
                                            <Image
                                                src='/static/images/StatMods/StatModsHealthScalingIcon.png'
                                                alt='Difficulty'
                                                width={32}
                                                height={32}
                                            /><br />
                                            {championData["difficulty"]}/10</p>
                                    </div>
                                    <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-blueGray-200">
                                        {/* champion tags */}
                                        <h2 className="text-lg font-bold">Tags: </h2>
                                        <p className="text-lg font-semibold"> {championData["tags"].replace(/[\[\]']+/g, ' ')}</p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                                        <button
                                            className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                                            type="button"
                                            onClick={() => setShowModal(false)}>
                                            Close
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                    </>) : <></>}
                </div>
            </div>
        </>
    )
}