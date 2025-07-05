import React from 'react';
import customLine from '../../assets/custom-line.png'
import Header from '../../Component/Shared/Header';
import Card from '../../Component/Shared/Card';
import CardOne from '../../Component/Shared/CardOne';
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
                <div className="mt-5 grid grid-cols-2 gap-5 ">
                    <Card name={"Frontend Development"} description={"I build responsive, accessible, and visually appealing interfaces using HTML, CSS, JavaScript, and modern frameworks like React to deliver seamless user experiences."}></Card>
                    <Card name={"Backend Development with PHP & MySQL"} description={"I develop secure, efficient backend systems using raw PHP and MySQL, handling data processing, authentication, and server-side logic for full-stack web applications."}></Card>
                    <Card name={"Machine Learning Integration"} description={"I design and implement machine learning models for real-world problems, integrating predictive features into web applications using Python-based tools and APIs."}></Card>
                    <Card name={"Full-Stack Project Development"} description={"From designing the UI to connecting it with backend logic and intelligent systems, I deliver complete, end-to-end web solutions tailored to specific business needs."}></Card>
                </div>
            </div>
            {/* my number  */}
            <div className="grid grid-cols-3 mt-10 gap-25">
                <CardOne number={"20"} text={"My completed project"}></CardOne>
                <CardOne number={"15"} text={"Client Review"}></CardOne>
                <CardOne number={"25"} text={"Happy Customer"}></CardOne>
            </div>
        </div>
    );
};

export default About;
