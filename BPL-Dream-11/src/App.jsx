
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Hompage/Banner/Banner'
import Players from './Components/Hompage/Players/Players'
import { Suspense, useState } from 'react'
const fetchPlayers= async()=>{
  const res= await fetch('/Data.json')
  return res.json()

}
function App() {
  
  const playersPromise=fetchPlayers()
  const [coin, setcoin]=useState(50000)
  return (
    <>
    
    <Navbar coin={coin}></Navbar>
    <Banner></Banner>
   <Suspense fallback={<span className="loading loading-dots loading-sm"></span>}> <Players playersPromise={playersPromise} setcoin={setcoin} coin={coin} > </Players></Suspense>
      
    </>
  )
}

export default App
