
import Head from 'next/head'
import LoginForm from '../components/Login'
import Profile from '../components/Profile';
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { user, login, logout } = useAuth();

  return (
    <div className="flex flex-col justify-center min-h-screen p-3">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>


      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        {user ? <Profile user = {user} /> : <LoginForm login={login} />}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>

    </div>
  );
}
