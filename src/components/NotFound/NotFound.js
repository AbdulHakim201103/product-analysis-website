import React from 'react';
import nofound from './nofound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src= {nofound} alt="" />
        </div>
    );
};

export default NotFound;