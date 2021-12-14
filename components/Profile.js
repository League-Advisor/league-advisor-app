import Image from "next/image";
import championKeys from "../public/static/championKeys";
import { useAuth } from '../contexts/auth'

export default function Profile() {
    const { user } = useAuth();

    return (

        <>
            <div className="flex flex-col items-center p-10 text-center border-4 border-gray-400 rounded-3xl">

                <div className="py-10">
                    <div class="w-48 h-48 bg-gray-200 rounded-full ">
                        <Image
                            src={user.profile_icon}
                            width='500'
                            height='500'
                            objectFit="contain"
                            className="rounded-full"
                        />
                    </div>
                </div>


                <div className="py-10">

                    <div className="text-3xl font-bold">
                        <h2>{user.summoner_name}</h2>
                    </div>

                    <div className="text-xl font-medium text-gray-700">
                        <h2>Level {user.summoner_level}</h2>
                    </div>

                    <div className="text-xl font-medium text-gray-700">
                        <h2>{user.summoner_server.toUpperCase().replace(/[0-9]/g, '')}</h2>
                    </div>
                </div>

                <div className="py-10">

                    <div className="flex ">

                        {user.summoner_rank.length > 0 ?

                            user.summoner_rank.map(queue =>
                                <div className="px-20 text-xl">
                                    <Image
                                        src={`/static/images/tier-icons/tier-icons/${queue.tier.toLowerCase()}_${queue.rank.toLowerCase()}.png`}
                                        width='200'
                                        height='200'
                                    />
                                    <h4>{`${queue.tier}  ${queue.rank}`}</h4>
                                    <br />
                                    <h4>{queue.queueType.replace(/_/g, ' ')}</h4>
                                </div>
                            ) :
                            <div className="px-20 text-xl">
                                <Image
                                    src={'/static/images/tier-icons/base-icons/provisional.png'}
                                    width='200'
                                    height='200'
                                />
                            </div>
                        }

                    </div>

                </div>
                <div className="py-10">

                    <div className="flex">
                        {user.summoner_champion_mastery.map(champion =>
                            <div className="w-1/3 px-20">
                                <div className="rounded-full">
                                    <Image
                                        src={`/static/images/champion/${championKeys[champion.championId]}.png`}
                                        width='100'
                                        height='100'
                                        objectFit="contain"
                                        className="rounded-full"
                                    />
                                </div>
                                <div>

                                    <Image
                                        src={`/static/images/mastery/Champion_Mastery_Level_${champion.championLevel}_Flair.png`}
                                        width={'100'}
                                        height={'100'}
                                    />
                                </div>

                                <h4>Mastery Level {champion.championLevel}</h4>
                                <h4>{champion.championPoints} Mastery Points </h4>

                            </div>

                        )}
                    </div>
                </div>


                <div className="py-10">

                    <div className="">
                        <table className="w-full py-8 my-10 border border-gray-700">
                            <thead className="bg-gray-400">
                                <tr>
                                    <th className="py-2 border-2 border-gray-600" >No.</th>
                                    <th className="py-2 border-2 border-gray-600" >Date</th>
                                    <th className="py-2 border-2 border-gray-600" >Time</th>

                                    <th className="py-2 border-2 border-gray-600" >Duration</th>
                                    <th className="py-2 border-2 border-gray-600" >Game Mode</th>

                                    <th className="py-2 border-2 border-gray-600" >{user.summoner_name}</th>
                                    <th className="py-2 border-2 border-gray-600" >K/D/A</th>
                                    <th className="py-2 border-2 border-gray-600" >Items</th>

                                    <th className="py-2 border-2 border-gray-600" >Blue Team</th>
                                    <th className="py-2 border-2 border-gray-600" >Red Team</th>
                                    <th className="py-2 border-2 border-gray-600" > Match Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {user.summoner_match_history.map(match =>
                                    <tr key={match["metadata"]["matchId"]} className="odd:bg-gray-300 even:bg-gray-200" >
                                        <td className="ml-2 text-lg border-2 border-r-0 border-gray-600 " > {user.summoner_match_history.indexOf(match) + 1}</td>
                                        <td className="ml-2 text-lg border-2 border-r-0 border-gray-600 " > {new Date(match["info"]["gameCreation"]).toLocaleDateString("en-GB")}</td>
                                        <td className="ml-2 text-lg border-2 border-r-0 border-gray-600 " > {new Date(match["info"]["gameCreation"]).toLocaleTimeString("en-US")}</td>

                                        <td className="ml-2 text-lg border-2 border-r-0 border-gray-600 " > {new Date(match["info"]["gameDuration"] * 1000).getMinutes()}:{new Date(match["info"]["gameDuration"] * 1000).getSeconds()} </td>
                                        <td className="ml-2 text-lg border-2 border-r-0 border-gray-600 " > {match["info"]["gameMode"]}</td>

                                        {match["info"]["participants"].map(player =>
                                            player["summonerName"] == user.summoner_name ?
                                                <>
                                                    <td className="py-2 text-lg border-2 border-l-2 border-gray-600 -2">

                                                        <Image
                                                            src={`/static/images/champion/${championKeys[player["championId"]]}.png`}
                                                            width='50'
                                                            height='50'
                                                            objectFit="contain"
                                                            className="rounded-full"
                                                        />

                                                    </td>

                                                    <td className="py-2 text-lg border-2 border-l-2 border-gray-600 -2">
                                                        {player["kills"]}/{player["deaths"]}/{player["assists"]}
                                                    </td>

                                                    <td className="py-2 text-lg border-2 border-l-2 border-gray-600 -2">
                                                        <Image
                                                            src={`/static/images/item/${player["item0"]}.png`}
                                                            width='50'
                                                            height='50'
                                                            objectFit="contain"
                                                            className="rounded-full"
                                                        />
                                                        <Image
                                                            src={`/static/images/item/${player["item1"]}.png`}
                                                            width='50'
                                                            height='50'
                                                            objectFit="contain"
                                                            className="rounded-full"
                                                        />
                                                        <Image
                                                            src={`/static/images/item/${player["item2"]}.png`}
                                                            width='50'
                                                            height='50'
                                                            objectFit="contain"
                                                            className
                                                            ="rounded-full"
                                                        />
                                                        <Image
                                                            src={`/static/images/item/${player["item3"]}.png`}
                                                            width='50'
                                                            height='50'
                                                            objectFit="contain"
                                                            className="rounded-full"
                                                        />
                                                        <Image
                                                            src={`/static/images/item/${player["item4"]}.png`}
                                                            width='50'
                                                            height='50'
                                                            objectFit="contain"
                                                            className="rounded-full"
                                                        />
                                                        <Image
                                                            src={`/static/images/item/${player["item5"]}.png`}
                                                            width='50'
                                                            height='50'
                                                            objectFit="contain"
                                                            className="rounded-full"
                                                        />
                                                        <Image
                                                            src={`/static/images/item/${player["item6"]}.png`}
                                                            width='50'
                                                            height='50'
                                                            objectFit="contain"
                                                            className="rounded-full"
                                                        />
                                                    </td>
                                                </>
                                                : <> </>
                                        )}
                                        <td className="py-2 text-lg border-2 border-l-2 border-gray-600 -2">
                                            {match["info"]["participants"].map(player =>
                                                player["teamId"] == 100 ?
                                                    <Image
                                                        src={`/static/images/champion/${championKeys[player["championId"]]}.png`}
                                                        width='50'
                                                        height='50'
                                                        objectFit="contain"
                                                        className="rounded-full"
                                                    />
                                                    : <></>
                                            )}
                                        </td>


                                        <td className="py-2 text-lg border-2 border-l-2 border-gray-600 -2">
                                            {match["info"]["participants"].map(player =>
                                                player["teamId"] == 200 ?
                                                    <Image
                                                        src={`/static/images/champion/${championKeys[player["championId"]]}.png`}
                                                        width='50'
                                                        height='50'
                                                        objectFit="contain"
                                                        className="rounded-full"
                                                    />
                                                    : <></>
                                            )}


                                        </td>

                                        <td>
                                            {
                                                match["info"]["participants"].map(player =>

                                                    player["summonerName"] == user.summoner_name ? (player["win"] ? <p className="text-cyan-500">VICTORY</p> : <p className="text-red-500">DEFEAT</p>) : <></>
                                                )}
                                        </td>

                                    </tr>)}

                            </tbody>
                        </table>



                    </div>

                </div>

            </div>

        </>

    )
}