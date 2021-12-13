import Head from 'next/head'
import LoginForm from '../components/Login'
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { user, login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        {user ? <>HELLO!</> : <LoginForm login={login} />}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  )
}
