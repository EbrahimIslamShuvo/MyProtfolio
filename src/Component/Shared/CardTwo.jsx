import React from 'react';
import { PiStudentBold } from "react-icons/pi";
const CardTwo = ({level , institute, year}) => {
    return (
        <div>
            <div className=" bg-[#1c222a] px-7 py-9 rounded-xl border-b-3 border-r-3 border-[#FF014F]">
                <div className="flex items-center gap-3">
                    <div className=" bg-[#FF014F] text-white p-3 text-3xl rounded-full">
                        <PiStudentBold />
                    </div>
                    <h1 className='text-2xl text-white font-semibold'>{level}</h1>
                </div>
                <p className='text-2xl text-gray-400'>{institute}</p>
                <p className='text-xl text-gray-400'>{year}</p>
            </div>
        </div>
    );
};

export default CardTwo;