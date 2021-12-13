import Head from 'next/head'
import LoginForm from '../components/Login'
import { useAuth } from '../contexts/auth'
import Dashboard from '../components/Dashboard'
export default function Home() {

  const { user, login, logout } = useAuth();

  return (
    // 
    <div>
      <Head>
        <title>League Advisor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Dashboard />
      {/* {user ? <Dashboard /> : <LoginForm login={login} />} */}

    </div>
  )
}
