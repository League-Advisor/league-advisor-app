import Head from 'next/head'
// import LoginForm from '../components/Login'
// import { useAuth } from '../contexts/auth'

import Items from '../components/ItemBrowse'
import Champion from '../components/championsbrowse'
export default function Home() {

  // const { user, login, logout } = useAuth();

  return (
    <div className="flex flex-col justify-center min-h-screen p-3">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex justify-center">
        {/* <LoginForm login={login} /> */}
        {/* /////////////////////////////////////////////////////// */}
        {/* <Items/> */}
        {/* <Champion /> */}

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        {user ? <>HELLO!</> : <LoginForm login={login} />}

      </main>

    </div>
  )
}
