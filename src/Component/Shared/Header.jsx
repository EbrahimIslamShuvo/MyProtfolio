import React from 'react';
import customLine from '../../assets/custom-line.png'
const Header = ({name}) => {
    return (
        <div>
            <div className="flex items-center gap-5 rajdhani-font">
                <h1 className="text-4xl font-semibold">{name}</h1>
                <img className='bg-gray-300' src={customLine} alt="" />
            </div>
        </div>
    );
};

export default Header;