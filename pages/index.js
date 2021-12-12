import Head from 'next/head'
import Signup from '../component/Signup'
import SoloItem from '../component/SoloItem'

export default function Home() {
	function handleSignUpForm(e){
		e.preventDefault()
		const email=e.target.email.value
		const gameName=e.target.gameName.value
		const userName=e.target.userName.value
		
		const password1=e.target.password1.value
		const password2=e.target.password2.value
		if(password1 !== password2) {
			window.alert("Passwords do not match!")
			
		 }
		console.log(email,gameName,userName,password1,password2);
	}
	
  return (
    <div className="items-center justify-center w-full min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Signup handleSignUpForm={handleSignUpForm}/>
		<SoloItem />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
