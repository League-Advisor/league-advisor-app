import React from "react";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";

import championNamse from "../public/static/championNames";

export default function Ranked() {
	let z;
	let flagChampion = false;
	const [response, setResponse] = useState({});
  
	async function handleSoloSearch(e) {
	  let n = 0;
	  e.preventDefault();
	  const championName = e.target.championName.value;
  
	  for (let i = 0; i < championArray.length; i++) {
		n++;
		if (championName.toLowerCase() == championArray[i].toLowerCase()) {
		 z=n;
		  const res = await axios.get(
			`http://127.0.0.1:8000/solo_champion/?champion_name=${championName}`
		  );
		  setResponse(res.data);
		  flagChampion = true;
		}
	  }
	  console.log(z);
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
				<SearchIcon className="relative float-right h-6 text-blue-400 -top-6 focus-within:text-blue-600" />
			  </button>
			</form>
		  </div>
		</div>
		{response ? (
		  <img
			src={`/static/images/champion/${championArray[z]}.png`}
			className="absolute w-40 h-50 top-20 left-40"
		  />
		):(<></>)}
	  </>
	);
}
