import React from 'react';
import { IoCodeSlashSharp } from "react-icons/io5";

const Card = ({name,description}) => {
    return (
        <div className=' rounded-xl hover:shadow-2xl shadow-gray-400 duration-500'>
            <div className="bg-gray-200/70 p-7 rounded-xl border-b-3 border-r-3 border-[#FF014F] h-full">
                <div className="flex items-center gap-3">
                    <div className="bg-[#FF014F] text-white p-3 text-2xl rounded-full">
                        <IoCodeSlashSharp />
                    </div>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                </div>
                <p className='mt-2'>{description}</p>
            </div>
        </div>
    );
};

export default Card;