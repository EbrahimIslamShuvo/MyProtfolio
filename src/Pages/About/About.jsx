import React from 'react';
import customLine from '../../assets/custom-line.png'
const About = () => {
    return (
        <div className="">
            <div className="flex items-center gap-5 rajdhani-font">
                <h1 className="text-4xl font-semibold">About Me</h1>
                <img className='bg-gray-300' src={customLine} alt="" />
            </div>
            <p className="mt-4 text-gray-600 text-justify"> Creative and detail-oriented Frontend Developer skilled in HTML, CSS, JavaScript, and modern frameworks like React. Experienced in building responsive, user-friendly interfaces and collaborating with cross-functional teams. Passionate about clean code, performance optimization, and delivering seamless user experiences. Eager to contribute to innovative and dynamic development projects</p>
        </div>
    );
};

export default About;
