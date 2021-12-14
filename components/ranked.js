import React from "react";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";

import championNamse from "../public/static/championNames";

export default function RankedItems() {
  let flag = false;
  async function handleSoloSearch(e) {
    e.preventDefault();
    const championName = e.target.championName.value;
	console.log(championNamse);
    // for (let i = 0; i < championNamse.length; i++) {
	// 	if (championName == championNamse[i]){
	// 		return championNamse[i]
	// 	}else{
	// 		return "wrong name"
	// 	}
		
	// }
    flag = true;
    // const response = await axios.get(
    //   "http://127.0.0.1:8000/solo_champion/?champion_name=morgana"
    // );
    // console.log(response.data.morgana, championName);
  }
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="flex w-full ">
          <video
            className="w-screen h-screen"
            playsInline
            autoPlay
            loop
            muted
            layout="fill"
            objectfit="cover"
            src="/Shurima-Crest.webm"
          />
        </div>
        <div className="absolute z-0 justify-center w-40 text-justify inset-x-1/2 top-20 ">
          <form method="get" onSubmit={handleSoloSearch}>
            <input
              
              name="championName"
              id="search"
              placeholder="champion name"
              className="w-full text-blue-400 form-input"
            />
			<button type="submit" className="float-right">
            <SearchIcon
              
              className="relative float-right h-6 text-blue-400 -top-6 focus-within:text-blue-600"
            />
			</button>
          </form>
        </div>
      </div>
    </>
  );
}
