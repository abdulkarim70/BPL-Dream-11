import React from 'react';

import Card from '../UI/Card';
const AvailablePlayers = ({players, setcoin, coin, sseletedPlayers, ssetselectedPlayers}) => {

    return (
        <div className=''>
<Card players={players} setcoin={setcoin} coin={coin} sseletedPlayers={sseletedPlayers} ssetselectedPlayers={ssetselectedPlayers}  ></Card>
 
        </div>
    );
};

export default AvailablePlayers;