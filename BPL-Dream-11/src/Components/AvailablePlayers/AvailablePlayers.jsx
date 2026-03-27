import React from 'react';

import Card from '../UI/Card';
const AvailablePlayers = ({players, setcoin, coin}) => {

    return (
        <div className=''>
<Card players={players} setcoin={setcoin} coin={coin}></Card>
 
        </div>
    );
};

export default AvailablePlayers;