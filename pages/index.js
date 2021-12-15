
import Head from 'next/head'


import Login from '../components/Login'
import Signup from '../components/Signup'
import SoloItem from '../components/SoloItem'
import Dashboard from '../components/Dashboard'
import LoginForm from '../components/Login'
import Profile from '../components/Profile';
import { useAuth } from '../contexts/auth'
import Dashboard from '../components/Dashboard'

export default function Home() {
  function handleSignUpForm(e) {
    e.preventDefault()
    const email = e.target.email.value
    const summonerName = e.target.summonerName.value
    const userName = e.target.userName.value


    const password1 = e.target.password1.value
    const password2 = e.target.password2.value
    if (password1 !== password2) {
      window.alert("Passwords do not match!")

    }
    console.log(email, summonerName, userName, password1, password2);
  }

  const { user, login, logout } = useAuth();


  return (
    <div className="flex flex-col justify-center min-h-screen p-1">



      <Head>
        <title>League Advisor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>


      {/* <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"> */}

      <Dashboard />

    </div>
  )
}
