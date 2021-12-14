
import Head from 'next/head'
import Login from '../components/Login'
import { useAuth } from '../contexts/auth'
import Dashboard from '../components/Dashboard'


export default function Home() {

  const { user, login } = useAuth();

  return (


    <div className="flex flex-col justify-center min-h-screen p-3">
      <Head>
        <title>League Advisor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">

        {
          user ? <Dashboard /> : <Login login = {login}/>
        }
      </ main>
    </div >
  );
}
