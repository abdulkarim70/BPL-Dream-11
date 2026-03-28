import React, { use, useState } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
import SelectedPlayer from './SelectedPlayer/SelectedPlayer';



const Players = ({playersPromise, setcoin, coin}) => {
 
 const players=use(playersPromise)
  
  const [selectedType, setselectedType]=useState('available')
  const [sselectedPlayers, ssetselectedPlayers]=useState([])

    return (
        <div className='max-w-7xl mx-auto my-[60px]'>
          
<div className='flex justify-between items-center gap-4 mb-[20px]'>
  {selectedType==='available'? <h2 className='font-bold text-3xl'>Available Players</h2>:<h2 className='font-bold text-3xl'>Selected Players</h2> }
   <div className=''>
    <button onClick={()=>setselectedType('available')} className={`btn ${selectedType==='available'?'bg-[#E7FE29]':''}  rounded-r-none rounded-l-xl`}>Available</button>
    <button onClick={()=>setselectedType('selected')} className={`btn ${selectedType==='selected'?'bg-[#E7FE29]':''}  rounded-l-xl rounded-r-none`}>Selected ({sselectedPlayers.length})</button>

   </div>
</div>

           {selectedType==='available'? <AvailablePlayers players={players} setcoin={setcoin} coin={coin} ssetselectedPlayers={ssetselectedPlayers} sselectedPlayers={sselectedPlayers} />:<SelectedPlayer sselectedPlayers={sselectedPlayers}/>}
        </div>
    );
};

export default Players;