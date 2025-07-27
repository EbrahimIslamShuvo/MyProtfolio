import React from 'react';

const CardOne = ({number,text}) => {
    return (
        <div>
            <div className="bg-[#1c222a] px-7 py-9 rounded-xl border-b-3 border-r-3 border-[#FF014F] text-center">
                <h1 className='text-4xl text-white font-semibold'>{number}</h1>
                <p className='text-lg text-gray-400'>{text}</p>
            </div>
        </div>
    );
};

export default CardOne;