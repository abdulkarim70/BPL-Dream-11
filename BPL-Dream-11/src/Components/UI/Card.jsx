import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
const Card = ({players, setcoin, coin, sselectedPlayers, ssetselectedPlayers}) => {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
  
    return (
        
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
    players.map(player=>{
        
        return         <div key={player.playerName} className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={player.playerImage}
      alt="Player Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser></FaUser>{player.playerName}</h2>
    <div className='flex justify-between gap-2 items-center'>
      <div className='flex gap-1 items-center '>
        <FaFlag></FaFlag>
      <p>{player.PlayerCountry}</p>
      </div>
      <button className='btn'>{player.PlayerType}</button>
     
    </div>
     <div className="divider"></div>
     <h2 className='font-bold'>({player.Rating})</h2>
     <div className='flex justify-between gap-4 font-bold'>
        <p className='text-left'>{player.battingStyle}</p>
        <p className='text-right'>{player.BowlingStyle}</p>
     </div>
    
    <div className="card-actions flex justify-between items-center">
        <p className='font-semibold'>Price: ${player.Price}</p>
      <button  className="btn" onClick={() => {
  if (!selectedPlayers.includes(player.playerName)) {
    let newCoin = coin - player.Price;

    if (newCoin >= 0) {
    
      setcoin(newCoin);

   
      setSelectedPlayers([...selectedPlayers, player.playerName]);

      alert(`${player.playerName} Selected`);
      ssetselectedPlayers([...sselectedPlayers, player])
    } else {
      alert('Not enough balance to purchase this player');
    }
  }
}}
        disabled={selectedPlayers.includes(player.playerName) }  >
          {selectedPlayers.includes(player.playerName)
            ? 'Selected'
            : 'Choose Player'}</button>
    </div>
  </div>
</div>
    })
}
</div>
    );
};

export default Card;