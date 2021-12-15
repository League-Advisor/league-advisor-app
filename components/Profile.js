import Image from "next/image";
import championKeys from "../public/static/championKeys";
import { useAuth } from "../contexts/auth"

export default function Profile() {
const { user } = useAuth();
    console.log(user);
    return (

        <>

            <div className="w-full px-4 mb-12">
                <div className="relative flex flex-col w-full min-w-0 text-white break-words bg-pink-900 shadow-lg rounded-3xl">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4 ">
                                <h2 className="py-10 text-5xl font-semibold text-white">{user.summoner_name} Profile</h2>
                                <div className="flex flex-col items-center p-10 mb-10 text-center border-4 rounded-3xl">

                                    <div className="py-10 ">
                                        <div class="w-48 h-48 bg-white rounded-full ">
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

                                        <div className="text-xl font-medium ">
                                            <h2>Level {user.summoner_level}</h2>
                                        </div>

                                        <div className="text-xl font-medium ">
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
                                                        <h4 className="text-2xl font-bold">{`${queue.tier}  ${queue.rank}`}</h4>
                                                        <br />
                                                        <h4 className="text-xl font-medium">{queue.queueType.replace(/_/g, ' ')}</h4>
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

                                                    <h4 className="text-2xl font-bold">Mastery Level {champion.championLevel}</h4>
                                                    <h4 className="text-xl font-medium">{champion.championPoints} Mastery Points </h4>

                                                </div>

                                            )}
                                        </div>
                                    </div>


                                    <div className="p-2 bg-gray-800 rounded-lg tems-center">
                                        <h4 className="text-2xl font-bold">Match History</h4>
                                        <div className="overflow-hidden ">
                                            <table className="w-full py-8 ">
                                                <thead className="">
                                                    <tr className="">
                                                        <th className="p-4" >No.</th>
                                                        <th className="p-4 " >Date</th>
                                                        <th className="p-4 " >Time</th>

                                                        <th className="p-4 " >Duration</th>
                                                        <th className="p-4 " >Game Mode</th>

                                                        <th className="p-4 " >{user.summoner_name}</th>
                                                        <th className="p-4 " >K/D/A</th>
                                                        <th className="p-4 " >Items</th>

                                                        <th className="p-4 " >Blue Team</th>
                                                        <th className="p-4 " >Red Team</th>
                                                        <th className="p-4 " >Match Status</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {user.summoner_match_history.map(match =>
                                                        <tr key={match["metadata"]["matchId"]} className="odd:bg-gray-700 even:bg-gray-500 " >
                                                            <td className="ml-2 text-lg border-r border-gray-800" > {user.summoner_match_history.indexOf(match) + 1}</td>
                                                            <td className="ml-2 text-lg border-r border-gray-800" > {new Date(match["info"]["gameCreation"]).toLocaleDateString("en-GB")}</td>
                                                            <td className="ml-2 text-lg border-r border-gray-800" > {new Date(match["info"]["gameCreation"]).toLocaleTimeString("en-US")}</td>

                                                            <td className="ml-2 text-lg border-r border-gray-800" > {new Date(match["info"]["gameDuration"] * 1000).getMinutes()}:{new Date(match["info"]["gameDuration"] * 1000).getSeconds()} </td>
                                                            <td className="ml-2 text-lg border-r border-gray-800" > {match["info"]["gameMode"]}</td>

                                                            {match["info"]["participants"].map(player =>
                                                                player["summonerName"] == user.summoner_name ?
                                                                    <>
                                                                        <td className="py-2 text-lg border-r border-gray-800">

                                                                            <Image
                                                                                src={`/static/images/champion/${championKeys[player["championId"]]}.png`}
                                                                                width='40'
                                                                                height='40'
                                                                                objectFit="contain"
                                                                                className="rounded-full"
                                                                            />

                                                                        </td>

                                                                        <td className="py-2 text-lg border-r border-gray-800">
                                                                            {player["kills"]}/{player["deaths"]}/{player["assists"]}
                                                                        </td>

                                                                        <td className="py-2 text-lg border-r border-gray-800">
                                                                            <Image
                                                                                src={`/static/images/item/${player["item0"]}.png`}
                                                                                width='40'
                                                                                height='40'
                                                                                objectFit="contain"
                                                                                className="rounded-full"
                                                                            />
                                                                            <Image
                                                                                src={`/static/images/item/${player["item1"]}.png`}
                                                                                width='40'
                                                                                height='40'
                                                                                objectFit="contain"
                                                                                className="rounded-full"
                                                                            />
                                                                            <Image
                                                                                src={`/static/images/item/${player["item2"]}.png`}
                                                                                width='40'
                                                                                height='40'
                                                                                objectFit="contain"
                                                                                className
                                                                                ="rounded-full"
                                                                            />
                                                                            <Image
                                                                                src={`/static/images/item/${player["item3"]}.png`}
                                                                                width='40'
                                                                                height='40'
                                                                                objectFit="contain"
                                                                                className="rounded-full"
                                                                            />
                                                                            <Image
                                                                                src={`/static/images/item/${player["item4"]}.png`}
                                                                                width='40'
                                                                                height='40'
                                                                                objectFit="contain"
                                                                                className="rounded-full"
                                                                            />
                                                                            <Image
                                                                                src={`/static/images/item/${player["item5"]}.png`}
                                                                                width='40'
                                                                                height='40'
                                                                                objectFit="contain"
                                                                                className="rounded-full"
                                                                            />
                                                                            <Image
                                                                                src={`/static/images/item/${player["item6"]}.png`}
                                                                                width='40'
                                                                                height='40'
                                                                                objectFit="contain"
                                                                                className="rounded-full"
                                                                            />
                                                                        </td>
                                                                    </>
                                                                    : <> </>
                                                            )}
                                                            <td className="py-2 text-lg border-r border-gray-800">
                                                                {match["info"]["participants"].map(player =>
                                                                    player["teamId"] == 100 ?
                                                                        <Image
                                                                            src={`/static/images/champion/${championKeys[player["championId"]]}.png`}
                                                                            width='40'
                                                                            height='40'
                                                                            objectFit="contain"
                                                                            className="rounded-full"
                                                                        />
                                                                        : <></>
                                                                )}
                                                            </td>


                                                            <td className="py-2 text-lg ">
                                                                {match["info"]["participants"].map(player =>
                                                                    player["teamId"] == 200 ?
                                                                        <Image
                                                                            src={`/static/images/champion/${championKeys[player["championId"]]}.png`}
                                                                            width='40'
                                                                            height='40'
                                                                            objectFit="contain"
                                                                            className="rounded-full"
                                                                        />
                                                                        : <></>
                                                                )}
                                                            </td>

                                                            <td className="ml-2 text-lg border-l border-gray-800">
                                                                {
                                                                    match["info"]["participants"].map(player =>

                                                                        player["summonerName"] == user.summoner_name ? (player["win"] ? <p className="font-bold text-cyan-500">VICTORY</p> : <p className="font-bold text-red-500">DEFEAT</p>) : <></>
                                                                    )}
                                                            </td>

                                                        </tr>)}

                                                </tbody>
                                            </table>


                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}