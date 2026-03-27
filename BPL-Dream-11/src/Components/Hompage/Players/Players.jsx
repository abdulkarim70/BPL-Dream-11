import React, { use, useState } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';



const Players = ({playersPromise}) => {
 
 const players=use(playersPromise)
  
  const [selectedType, setselectedType]=useState('available')
  
  console.log(selectedType, 'selectedtype')
    return (
        <div className='max-w-7xl mx-auto my-[60px]'>
          
<div className='flex justify-between items-center gap-4 mb-[20px]'>
  {selectedType==='available'? <h2 className='font-bold text-3xl'>Available Players</h2>:<h2 className='font-bold text-3xl'>Selected Players</h2> }
   <div className=''>
    <button onClick={()=>setselectedType('available')} className={`btn ${selectedType==='available'?'bg-[#E7FE29]':''}  rounded-r-none rounded-l-xl`}>Available</button>
    <button onClick={()=>setselectedType('selected')} className={`btn ${selectedType==='selected'?'bg-[#E7FE29]':''}  rounded-l-xl rounded-r-none`}>Selected(0)</button>

   </div>
</div>

           { <AvailablePlayers players={players}></AvailablePlayers>}
        </div>
    );
};

export default Players;