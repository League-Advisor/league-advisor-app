import Head from 'next/head'
import { useAuth } from '../contexts/auth'
import Navbar from '../components/Navbar'

export default function Home() {
  const { user, login, logout } = useAuth()
  return (
    <div className="items-center justify-center w-full min-h-screen py-2">
      <Head>
        <title>League Advisor</title>
      </Head>

      <main >
        {/* {user ?
          <>
            <Profile />
            <Dashboard />
          </>

          :
          <></>
        } */}
        <Navbar />

      </main>
      {/* <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"> */}

      {/* </main> */}

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div>
  )
}
