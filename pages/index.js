import Head from 'next/head'
import LoginForm from '../components/Login'
import Dashboard from '../components/Dashboard'
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { user, login } = useAuth();

  return (


    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"> */}
        {user ? <Dashboard /> : <LoginForm login={login} />}


    </div>
  )
}
