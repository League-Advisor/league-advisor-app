import Head from 'next/head'
import Login from '../components/Login'
import Signup from '../components/Signup'
import SoloItem from '../components/SoloItem'

export default function Home() {
	function handleSignUpForm(e){
		e.preventDefault()
		const email=e.target.email.value
		const summonerName=e.target.summonerName.value
		const userName=e.target.userName.value
		
		const password1=e.target.password1.value
		const password2=e.target.password2.value
		if(password1 !== password2) {
			window.alert("Passwords do not match!")
			
		 }
		console.log(email,summonerName,userName,password1,password2);
	}
	


  return (
    <div className="flex flex-col justify-center min-h-screen p-3">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>


      <main className="flex justify-center">
        {/* <Signup handleSignUpForm={handleSignUpForm}/> */}
		<SoloItem />
		{/* <Login /> */}

      </main>

      <footer>
        


      </footer>
    </div>
  )
}
