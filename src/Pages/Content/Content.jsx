import React from 'react';
import under from '../../assets/under.jpg'

const Content = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img src={under} className='h-110' alt="" />
                {/* <h1>Under Construction</h1> */}
            </div>
        </div>
    );
};

export default Content;