import React from 'react';

import Card from '../UI/Card';
const AvailablePlayers = ({ players, setcoin, coin, sselectedPlayers, ssetselectedPlayers }) => {

    return (
        <div className=''>
            <Card 
                players={players} 
                setcoin={setcoin} 
                coin={coin} 
                sselectedPlayers={sselectedPlayers} 
                ssetselectedPlayers={ssetselectedPlayers} 
            />
        </div>
    );
};
export default AvailablePlayers;