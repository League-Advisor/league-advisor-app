import React, { useState } from "react";
import axios from "axios";
import { Icon } from '@iconify/react';
import itemKeys from "../public/static/itemKeys";
import { championArray } from "../public/static/champion";

import Image from "next/image";

const soloItemUrl = process.env.NEXT_PUBLIC_SOLO_ITEM_URL;

export default function SoloItem() {
  const [build, setBuild] = useState(null)
  const [champion, setChampion] = useState(null)

  
  async function handelsearch(event) {
    event.preventDefault()

    const chName = event.target.championname.value

    // NOTE: GET THE PROPER CHAMPION NAME CASE
    let realNames = championArray.map(name => name.toLowerCase());
    await setChampion(championArray[realNames.indexOf(chName)])

    const response = await axios.get(`${soloItemUrl}${chName}`)
    const data = response.data[`${chName}`]

    

    await setBuild(data)


    event.target.reset()
    console.log(build);
  }
  return (
    <>
      <div className="flex w-full h-screen">
        <div
          className="flex w-full z-1 "
          style={{ width: "100%" }}
        >
          <video
            playsInline
            autoPlay
            loop
            muted
            className="absolute w-full z-1 "
            layout="fill"
            src="/Shurima-Crest.webm"
          />

          <div className="z-0 flex w-1/2 py-10">

            {/* //////////////////// */}
            <form className="z-0 " onSubmit={(event) => handelsearch(event)}>
              <h1 className="z-0 block w-full pl-10 my-2 mt-5 text-4xl font-bold text-white ">Recommended Items</h1>
              <div className="items-start py-5 pl-5">


                <label
                  className="z-0 block w-full py-10 my-2 mt-5 text-xl font-bold tracking-wide text-white ">
                  <h2 className="w-full mt-0 mb-2 ml-4 text-xl leading-normal capitalize shadow-2xl font-lg text-blueGray-50">
                    Enter your champion name to get the recommended build!
                  </h2>
                </label>
              </div>
              <div className="inline-flex w-full px-10">
                <input
                  className="z-0 block w-full px-20 py-4 leading-tight text-gray-700 border border-gray-200 border-solid rounded-l-lg appearance-none bg-white/90 focus:outline-none focus:bg-white focus:border-gray-200 "
                  id="championname"
                  type="text"
                  name="championname"
                  placeholder="champion name"
                  required
                />
                <div className="flex w-full z-1">
                  <button className="justify-center w-32 bg-yellow-300 rounded-r-lg z-1" type="submit">
                    <Icon icon="fluent:database-search-24-regular" className="w-full text-5xl font-lg " />
                  </button>
                </div>
              </div>
            </form>

            

          </div>
          {build ?
              <div className="z-0 ">
                <div className="absolute mt-20 bg-gray-200 rounded-lg shadow-2xl left-12 top-96">
                <h3 className="absolute z-0 text-5xl font-semibold text-white capitalize -top-14"> {champion}</h3>

                  <Image
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`}
                    width={606}
                    height={358}
                    className="z-0"
                  />
                </div>

                <div className="absolute grid items-center justify-center max-w-4xl grid-cols-6 grid-rows-4 gap-6 text-white right-18 bottom-1 ">
                  
                  <h3 className="absolute z-0 text-5xl font-semibold text-white capitalize ml-80 -top-14"> Optimal Items</h3>
                  {build.map(item => {
                  
                    return(
                    <div className="z-0 ml-8 text-lg font-semibold w-26">
                      <h4 >{item}</h4>
                      <Image
                        src={`/static/images/item/${itemKeys[item]}.png`}
                        width={75}
                        height={75}
                        className="z-0 block pl-4"
                      />
                    </div>
                    )
                  })}
                </div>

              </div>
              : 
              <div>
              <h1 className="text-xl leading-normal capitalize shadow-2xl z-1 font-lg text-blueGray-50">
                Please Enter a Valid Champion Name!
              </h1> </div>
              }
        </div>
      </div>
    </>
  );
}
