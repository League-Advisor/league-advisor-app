import { useRouter } from 'next/router'
import Image from 'next/image';

export default function LoginForm({ login }) {
    const router = useRouter()
    return (

        <div className="absolute flex w-full min-h-screen text-center bg-gray-300">
            <div className="flex w-full rounded z-1 color-gray-200" style={{ width: "100%" }}>

                <video playsInline autoPlay loop muted className="absolute w-full z-1" layout="fill" objectFit="cover" src="/Galio.webm" />

                <div className="z-0 flex w-1/2 py-20" >
                    <form className="w-full py-20" onSubmit={(event) => { event.preventDefault(), login(event.target.userName.value, event.target.password.value) }}>
                        <div className="z-0 justify-start w-1/3 text-xl font-bold ">
                            <h2 className="z-0 justify-start text-5xl font-bold text-white">Login</h2>
                        </div>
                        <div className="px-5 py-5" >

                            <div className="items-start py-5 ">
                                <label className="z-0 block w-1/3 my-2 mt-5 text-xl font-bold tracking-wide text-white " htmlFor="userName">
                                    username
                                </label>
                            </div>
                            <div className="px-10">
                                <input className="z-0 block w-full px-4 py-4 leading-tight text-gray-700 border border-gray-200 border-solid rounded appearance-none bg-white/80 focus:outline-none focus:bg-white focus:border-gray-200 " id="userName" type="text" placeholder="username" required />
                            </div>

                            <div className="items-start py-5 ">
                                <label className="z-0 block w-1/3 my-2 mt-5 text-xl font-bold tracking-wide text-white " htmlFor="password">
                                    password
                                </label>
                            </div>
                            <div className="z-0 px-10 ">
                                <input className="z-0 block w-full px-4 py-4 leading-tight text-black border border-gray-200 border-solid rounded appearance-none bg-white/90 focus:outline-none focus:bg-white focus:border-gray-200" id="password" type="password" placeholder="password" required />
                            </div>

                            <div className="z-0 px-10 py-20">
                                <input className="block w-full px-4 py-6 text-2xl font-bold leading-tight text-gray-800 transition rounded bg-white/90 hover:bg-gray-300/90 active:bg-gray-500/80 active:text-white" type="submit" value="login" required />
                            </div>
                        </div>
                    </form >
                </div>
                <div className="z-0 flex justify-center w-2/3 py-20 ">
                    <div className="z-0 w-5/6 px-5 py-20 bg-gray-100/90 rounded-xl">
                        <Image
                            src='/logo.png'
                            width={300}
                            height={300}
                        />
                        <div className="z-0 justify-start p-5 ">

                            <h2 className="z-0 py-5 text-4xl font-bold ">
                                Welcome to League Advisor
                            </h2>
                            <br />

                            <p className="text-xl font-bold">

                                League Advisor is your perfect League of Legends companion!
                                <br /> <br />
                                It is designed to enhance your experience with League of Legends and help you get more into the game regardless of your rank or experience. Stay up to date with game news, explore game champions, items and find the prefect items build for any situation, and more!


                            </p>
                            <br /><br />
                            <h4 className="text-xl font-bold">Not a member already?


                                <button type="button" onClick={() => router.push('/signup')}>
                                    <a className="pl-5 text-2xl font-bold text-blue-500 hover:text-red-500" > Sign up here!</a>
                                </button>


                            </h4>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}