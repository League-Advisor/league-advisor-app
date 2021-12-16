import Head from 'next/head'
import LoginForm from '../components/Login'
import Dashboard from '../components/Dashboard'
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { user, login } = useAuth();

  return (


    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>

        <title>League Advisor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

        {user ? <Dashboard user = {user}/> : <LoginForm login={login} />}


    </div>
  )
}
