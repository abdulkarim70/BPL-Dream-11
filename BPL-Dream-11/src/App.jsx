
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Hompage/Banner/Banner'
import Players from './Components/Hompage/Players/Players'
import { Suspense } from 'react'
const fetchPlayers= async()=>{
  const res= await fetch('/Data.json')
  return res.json()

}
function App() {
  const playersPromise=fetchPlayers()
  return (
    <>
    
    <Navbar></Navbar>
    <Banner></Banner>
   <Suspense fallback={<span className="loading loading-dots loading-sm"></span>}> <Players playersPromise={playersPromise}></Players></Suspense>
      
    </>
  )
}

export default App
