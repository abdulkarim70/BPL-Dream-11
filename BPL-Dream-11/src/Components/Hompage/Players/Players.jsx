import React, { use, useState } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';



const Players = ({playersPromise}) => {
 console.log(playersPromise);
 const players=use(playersPromise)
  console.log(players);
  const [selectedType, setselectedType]=useState('available')
    return (
        <div className='max-w-7xl mx-auto my-[60px]'>
          
<div className='flex justify-between items-center gap-4 mb-[20px]'>
   <h2 className='font-bold text-3xl'>Available Players</h2> 
   <div className=''>
    <button className="btn bg-[#E7FE29] rounded-r-none rounded-l-xl">Available</button>
    <button className="btn btn-neutral rounded-l-none rounded-r-xl">Selected</button>

   </div>
</div>

           <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;