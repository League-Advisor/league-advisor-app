import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import axios from "axios";
import swal from 'sweetalert';


export default function signup({user}) {
  const router = useRouter()

  const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION_URL

  async function registerHandler(event) {
    event.preventDefault();
    let registrationRequest = {
      "username": event.target.username.value,
      "password": event.target.password1.value,
      "email": event.target.email.value,
      "summoner_name": event.target.summoner_name.value,
      "summoner_server": event.target.summoner_server.value,
    }

    
    const response = await axios.post(registrationUrl, registrationRequest)


    if (response.data["email"]) {
      console.log(response.data["email"]);
      setTimeout(() => { swal("success!", "You successfully create an account!", "success"); }, 1000)
      router.push("/#")
    }
  }

  return (
    <div>
      
      <div className="flex items-center justify-center w-full min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>

            <Image src="/logo.png" width={360} height={360} />

            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              SIGN UP
            </h2>

            <p className="mt-2 text-sm text-center text-gray-600"></p>
          </div>

          <form
            className="mt-8 space-y-6"
            method="POST"
            onSubmit={(event) => { registerHandler(event) }}
          >

            <div className="-space-y-px rounded-md ">



              <div className="py-5">
                <label className="py-10 text-xl font-medium" for="username" >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full px-3 py-3 mt-5 text-lg text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  placeholder="Add a Username"
                />
              </div>


              <div className="py-5">
                <label className="py-10 text-xl font-medium" className="py-10 text-xl font-medium" for="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-3 mt-5 text-lg text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  placeholder="Enter your Email"
                />

              </div>

              <div className="py-5">
                <label className="py-10 text-xl font-medium" for="summoner_name" >
                  Summoner Name
                </label>
                <input
                  id="summoner_name"
                  name="summoner_name"
                  type="text"
                  required
                  className="relative block w-full px-3 py-3 mt-5 text-lg text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  placeholder="Add your Summoner name"
                />
              </div>

              <div className="py-5">
                <label className="py-10 text-xl font-medium" for="summoner_server" >
                  Summoner Server
                </label>
                <select
                  id="summoner_server"
                  name="summoner_server"
                  type="select"
                  required
                  className="relative block w-full px-3 py-3 mt-5 text-lg text-gray-900 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                >
                  <option value="br1">Brazil</option>
                  <option value="la1">Latin America 1</option>
                  <option value="la2">Latin America 2</option>
                  <option value="na1">North America</option>
                  <option value="eun1">Europe Nordic and East</option>
                  <option value="euw1">Europe West</option>
                  <option value="ru">Russia</option>
                  <option value="tr1">Turkey</option>
                  <option value="oc1">Oceania</option>
                  <option value="jp1">Japan</option>
                  <option value="kr">Korea</option>

                </select>
              </div>

              <div className="py-5">
                <label className="py-10 text-xl font-medium" for="password1" >
                  Password
                </label>
                <input
                  id="password1"
                  name="password1"
                  type="password"
                  autoComplete="current-password"
                  minlength="8"
                  required
                  className="relative block w-full px-3 py-3 mt-5 text-lg text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  placeholder="Password"
                />
              </div>

              <div className="py-5">
                <label className="py-10 text-xl font-medium" for="password2" >
                  Confirm Password
                </label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  minlength="8"
                  required
                  className="relative block w-full px-3 py-3 mt-5 text-lg text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="py-5">
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-4 text-xl font-bold text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}