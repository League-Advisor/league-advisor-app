import React from "react";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import axios from "axios";

// import championArray from "../public/static/champion";
const championArray = [
  "Aatrox",
  "Ahri",
  "Akali",
  "Akshan",
  "Alistar",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "AurelionSol",
  "Azir",
  "Bard",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Caitlyn",
  "Camille",
  "Cassiopeia",
  "Chogath",
  "Corki",
  "Darius",
  "Diana",
  "Draven",
  "DrMundo",
  "Ekko",
  "Elise",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "JarvanIV",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "Kaisa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "Khazix",
  "Kindred",
  "Kled",
  "KogMaw",
  "Leblanc",
  "LeeSin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "MasterYi",
  "MissFortune",
  "MonkeyKing",
  "Mordekaiser",
  "Morgana",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nocturne",
  "Nunu",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "RekSai",
  "Rell",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "TahmKench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "TwistedFate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "Velkoz",
  "Vex",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "Xayah",
  "Xerath",
  "XinZhao",
  "Yasuo",
  "Yone",
  "Yorick",
  "Yuumi",
  "Zac",
  "Zed",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra",
];

export default function SoloChampion() {
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
        z = n;
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
      {flagChampion ?
        <img
          src={`/static/images/champion/${championArray[z]}.png`}
          className="absolute w-40 h-50 top-20 left-40"
        />
        : (<></>)}
    </>
  );
}
