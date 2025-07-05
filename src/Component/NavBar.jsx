import React, { useState } from 'react';
import me from '../assets/me.png';
import bg from '../assets/bg.jpg';
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaArrowDown } from 'react-icons/fa6';
import { IoMdMailOpen } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [active, setActive] = useState("about");

    const handleActive = (name) => {
        setActive(name);
    };

    return (
        <div className="rubik-font bg-transparent min-h-screen">
            {/* Background Image */}
            <img src={bg} alt="Background" className="w-full h-[300px] object-cover" />

            {/* Main Content */}
            <div className="w-10/12 mx-auto flex flex-col md:flex-row items-start gap-10 -mt-40 relative z-50">
                {/* Profile Card Column */}
                <div className="md:w-[375px] w-full">
                    <div className="flex flex-col items-center gap-7 rounded-md py-10 bg-white border-2 border-gray-400 shadow shadow-gray-300 md:sticky md:top-24 z-20 h-fit">
                        <div className="bg-[#311D26] rounded-xl w-[300px] h-[300px] overflow-hidden">
                            <img className="rounded-md w-full h-full object-cover" src={me} alt="Profile" />
                        </div>

                        <div className="text-center flex flex-col gap-2">
                            <h1 className="text-2xl font-semibold text-black">MD. Ebrahim Islam Shuvo</h1>
                            <h4 className="text-lg text-gray-400">Front-End Developer</h4>
                        </div>

                        <div className="text-black bg-white px-5 py-3 rounded-lg text-center text-sm flex flex-col gap-2">
                            <p>Phone: +880 1648438489</p>
                            <p>Email: ebrahimislam2003@gmail.com</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-between items-center w-7/12 mx-auto text-xl text-black">
                            <a
                                href="https://www.linkedin.com/in/ebrahim-islam-shuvo-0300961a8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-300 dark:bg-gray-700 hover:bg-[#FF014F] hover:text-white duration-500 hover:-translate-y-2 p-3 rounded-full cursor-pointer"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.facebook.com/ebrahim.islam.2003/" target="_blank" rel="noopener noreferrer">
                                <div className="bg-gray-300 hover:bg-[#FF014F] hover:text-white duration-500 hover:-translate-y-2 p-3 rounded-full cursor-pointer dark:bg-gray-700">
                                    <FaFacebookF />
                                </div>
                            </a>
                            <a href="mailto:ebrahimislam2003@gmail.com">
                                <div className="bg-gray-300 hover:bg-[#FF014F] hover:text-white duration-500 hover:-translate-y-2 p-3 rounded-full cursor-pointer dark:bg-gray-700">
                                    <IoMdMailOpen />
                                </div>
                            </a>
                            <a href="https://www.youtube.com/@ebrahimislamshuvo" target="_blank" rel="noopener noreferrer">
                                <div className="bg-gray-300 hover:bg-[#FF014F] hover:text-white duration-500 hover:-translate-y-2 p-3 rounded-full cursor-pointer dark:bg-gray-700">
                                    <FaYoutube />
                                </div>
                            </a>
                        </div>

                        {/* CV Buttons */}
                        <div className="flex flex-col gap-3">
                            {/* View */}
                            <a href="/MD. Ebrahim Islam Shuvo 1.pdf" target="_blank" rel="noopener noreferrer">
                                <div className="bg-[#FF014F] group transition-all duration-500 flex items-center justify-center gap-2 text-white px-5 py-3 rounded-full text-lg cursor-pointer overflow-hidden relative">
                                    <FaArrowDown className="group-hover:hidden translate-y-0 group-hover:-translate-y-2 transition-all duration-700" />
                                    <p className="z-10">Download My CV</p>
                                    <FaArrowDown className="group-hover:block hidden translate-y-4 group-hover:translate-y-0 transition-all duration-700" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Links Column */}
                <div className="flex-1">
                    <div className="flex gap-6 flex-wrap bg-white rounded-md px-10 py-5 mt-25 shadow-2xl border-2 border-gray-400 sticky top-0 z-50 w-fit">
                        {[
                            { name: "about", label: "My About", path: "/" },
                            { name: "resume", label: "My Resume", path: "/resume" },
                            { name: "work", label: "My Work", path: "/work" },
                            { name: "content", label: "My Content", path: "/content" },
                            { name: "contact", label: "Contact", path: "/contact" }
                        ].map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => handleActive(link.name)}
                                className={`px-8 py-5 rounded-md text-xl transition-all duration-300 ${active === link.name
                                    ? "bg-[#FF014F] text-white"
                                    : "bg-gray-200 text-black"
                                    }`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
