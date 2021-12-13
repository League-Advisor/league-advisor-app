// import Link from "next/link";
// // import Image from "next/image";


// export default function LoginForm({login}) {

//     return (
//         <div className="flex w-3/4 bg-gray-300 rounded ">
//             <div className="flex w-1/2 py-10 ">
//                 <form className="w-full" onSubmit = {(event) => {event.preventDefault(), login(event.target.userName.value, event.target.password.value)}}>
//                     <div className="justify-start w-1/3 text-xl font-bold ">
//                         <h2 className="justify-start text-3xl font-bold">Login</h2>
//                     </div>

//                     <div className="px-5 " >

//                         <div className="items-start ">
//                             <label className="block w-1/3 my-2 mt-5 text-xl font-bold tracking-wide text-gray-800 " for="userName">
//                                 username
//                             </label>
//                         </div>
//                         <div className="px-10">
//                             <input className="block w-full px-4 py-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 border-solid rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-200" id="userName" type="text" placeholder="username" required />
//                         </div>

//                         <div className="items-start pl-5">
//                             <label className="block w-1/3 my-2 mt-5 text-xl font-bold tracking-wide text-gray-800 " for="password">
//                                 password
//                             </label>
//                         </div>
//                             <div className="px-10">
//                                 <input className="block w-full px-4 py-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 border-solid rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-200" id="password" type="password" placeholder="password" required />
//                             </div>

//                         <div className="px-10 py-10">
//                             <input className="block w-full px-4 py-4 text-xl font-bold leading-tight text-gray-700 transition bg-gray-400 rounded hover:bg-gray-500" id="userName" type="submit" placeholder="username" required />
//                         </div>    
//                     </div>
//                 </form >
//             </div>

//                 <div className="flex justify-center w-1/2 py-10">
//                     <div className="w-5/6 px-5 bg-gray-100 rounded-xl">
//                         <div className="justify-start p-5 ">
//                             <h2 className = "justify-start w-3/6 py-5 text-xl font-bold">
//                             League Advisor
//                             </h2>
//                             <br/>

//                             <p className="text-xl">
//                                 Is the perfect League of Legends companion! Stay up to date with game news, explore game champions, items and find the prefect items build for any situation!
//                             </p>
//                             <br/><br/>
//                             <h4 className="text-xl">Note a member? 
//                                 <Link href="#">
//                                 <a className="text-blue-500 hover:text-red" > Sign up here!</a>
//                                 </Link>
//                                 </h4>

//                         </div>
//                     </div>
//                 </div>
//         </div>
//     );
// }