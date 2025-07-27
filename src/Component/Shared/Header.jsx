import React from 'react';
import customLine from '../../assets/custom-line.png'
const Header = ({name}) => {
    return (
        <div data-aos="fade-up">
            <div className="flex items-center gap-5 rajdhani-font">
                <h1 className="md:text-4xl text-3xl text-white font-semibold">{name}</h1>
                <img className='bg-black' src={customLine} alt="" />
            </div>
        </div>
    );
};

export default Header;