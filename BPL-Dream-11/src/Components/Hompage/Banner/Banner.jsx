import React from 'react';
import img from '../../../assets/banner-main.png'
const Banner = () => {
    return (
        <div className='min-h-[60vh] bg-linear-to-r from-purple-500 to-purple-300 max-w-7xl mx-auto '>
 <img src={img} alt="" />
        </div>
    );
};

export default Banner;