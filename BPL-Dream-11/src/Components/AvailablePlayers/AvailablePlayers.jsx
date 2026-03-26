import React from 'react';

import Card from '../UI/Card';
const AvailablePlayers = ({players}) => {

    return (
        <div className=''>
<Card players={players}></Card>
 
        </div>
    );
};

export default AvailablePlayers;