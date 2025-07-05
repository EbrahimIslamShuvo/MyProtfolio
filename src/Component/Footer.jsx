import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { IoMdMailOpen } from 'react-icons/io';
import me from '../assets/me.png';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#18181b] py-10 border-t dark:border-gray-700 mt-20 transition-colors duration-500">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-center md:text-left">
                {/* Profile Image */}
                <img className="w-20 h-20 object-cover rounded-full" src={me} alt="Profile" />

                {/* Info & Socials */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-2xl font-semibold text-black dark:text-white">MD. Ebrahim Islam Shuvo</h1>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-xl text-black dark:text-white">
                        <a
                            href="https://www.linkedin.com/in/ebrahim-islam-shuvo-0300961a8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-300 dark:bg-gray-700 hover:bg-[#FF014F] hover:text-white duration-500 hover:-translate-y-2 p-3 rounded-full cursor-pointer"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://www.facebook.com/ebrahim.islam.2003/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-300 dark:bg-gray-700 hover:bg-[#FF014F] hover:text-white duration-500 hover:-translate-y-2 p-3 rounded-full cursor-pointer"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="mailto:ebrahimislam2003@gmail.com"
                            className="bg-gray-300 dark:bg-gray-700 hover:bg-[#FF014F] hover:text-white duration-500 hover:-translate-y-2 p-3 rounded-full cursor-pointer"
                        >
                            <IoMdMailOpen />
                        </a>
                        <a
                            href="https://www.youtube.com/@ebrahimislamshuvo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-300 dark:bg-gray-700 hover:bg-[#FF014F] hover:text-white duration-500 hover:-translate-y-2 p-3 rounded-full cursor-pointer"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                © {new Date().getFullYear()} MD. Ebrahim Islam Shuvo. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
