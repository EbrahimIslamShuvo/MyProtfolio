import React from 'react';
import customLine from '../../assets/custom-line.png'
import Header from '../../Component/Shared/Header';
import Card from '../../Component/Shared/Card';
const About = () => {
    return (
        <div className="">
            {/* about me */}
            <div className="">
                <Header name={"About me"}></Header>
                <h1 className=' text-4xl font-semibold mt-5 rajdhani-font'>Innovative Frontend Developer Focused on User-Centered, Responsive Web Solutions</h1>
                <p className="mt-2 text-xl text-gray-600 text-justify rubik-font"> Creative and detail-oriented Frontend Developer skilled in HTML, CSS, JavaScript, and modern frameworks like React. Experienced in building responsive, user-friendly interfaces and collaborating with cross-functional teams. Passionate about clean code, performance optimization, and delivering seamless user experiences. Eager to contribute to innovative and dynamic development projects</p>
            </div>
            {/* What i do */}
            <div className="mt-15">
                <Header name={"What I Do"}></Header>
                <div className="">
                    <Card></Card>
                </div>
            </div>
        </div>
    );
};

export default About;
