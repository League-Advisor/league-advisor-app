import React, { useState } from "react";
import axios from "axios";
import { Icon } from '@iconify/react';



export default function SoloItem() {
const [build, setbuild] = useState(null)


  async function handelsearch(event) {
    event.preventDefault()
    
    const chName = event.target.championname.value
    const buildUrl = 'http://127.0.0.1:8000/solo_champion/?champion_name='
    const response = await axios.get(`${buildUrl}${chName}`)
    const data = response.data[`${chName}`]
    console.log(data);
    setbuild(data)
    event.target.reset()
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
            objectFit="cover"
            src="/Shurima-Crest.webm"
          />

          <div className="z-0 flex w-1/2 py-10">
            
            {/* //////////////////// */}
            <form className="z-0" onSubmit={(event)=>handelsearch(event)}>
              <div className="items-start py-5 pl-5">
                <label
                  className="z-0 block w-full my-2 mt-5 text-xl font-bold tracking-wide text-white "
                  forhtml="championname"
                >
                  <h1 class="text-xl font-lg leading-normal mt-0 mb-2 text-blueGray-50 w-full ml-4 shadow-2xl capitalize">
                    here you can get the recommended build for your champion by entering the champion name. 
                  </h1>
                </label>
              </div>
              <div className="inline-flex w-full px-10">
                <input
                  className="z-0 block w-full px-4 py-4 leading-tight text-gray-700 border border-gray-200 border-solid rounded-l-lg appearance-none bg-white/90 focus:outline-none focus:bg-white focus:border-gray-200 "
                  id="championname"
                  type="text"
                  name="championname"
                  placeholder="champion name"
                  required
                />
                <div className="flex w-full z-1">
                  <button className="justify-center w-32 bg-yellow-300 rounded-r-lg z-1" type="submit">
                    <Icon icon="fluent:database-search-24-regular" className="w-full text-5xl font-lg "/>
                  </button>
                </div>
              </div>
            </form>
            {/* //////////////////// */}

            {/* {build != []? <div>    </div> : <h1 className="text-xl leading-normal capitalize shadow-2xl z-1 font-lg text-blueGray-50">
              pleease enter a valid champion name.
            </h1>} */}
            
          </div>

        </div>
      </div>
    </> 
  );
}
