import React from 'react';
import Header from '../../Component/Shared/Header';

const Contact = () => {
    return (
        <div>
            <div className="">
                <Header name={"GET IN TOUCH"}></Header>
                <p className='text-xl'>Reach Out, Let's Make Things Happen!</p>
                <div className="mt-5 flex flex-col gap-5">
                    <div className="flex gap-15">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="border-3 border-gray-200 focus:border-[#FF014F] rounded-md px-4 py-2 outline-none transition-colors duration-300 w-full" 
                        />
                        <input 
                            type="text" 
                            placeholder="Your Email" 
                            className="border-3 border-gray-200 focus:border-[#FF014F] rounded-md px-4 py-2 outline-none transition-colors duration-300 w-full" 
                        />
                    </div>
                    <div className="flex gap-15">
                        <input 
                            type="text" 
                            placeholder="Phone" 
                            className="border-3 border-gray-200 focus:border-[#FF014F] rounded-md px-4 py-2 outline-none transition-colors duration-300 w-full" 
                        />
                        <input 
                            type="text" 
                            placeholder="Sunject" 
                            className="border-3 border-gray-200 focus:border-[#FF014F] rounded-md px-4 py-2 outline-none transition-colors duration-300 w-full" 
                        />
                    </div>
                    <div className="">
                        <textarea 
                            placeholder="Your Message" 
                            className="border-3 border-gray-200 focus:border-[#FF014F] rounded-md px-4 py-2 outline-none transition-colors duration-300 w-full h-40 resize-none" 
                        ></textarea>
                    </div>
                    <div className="">
                        <button className='bg-[#FF014F] w-full py-3 rounded-md text-white font-semibold text-xl'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;