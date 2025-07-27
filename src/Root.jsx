import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';

const Root = () => {
    return (
        <div className="bg-black">
            <ScrollToTop />
            <div className="">
                <div className="">
                    <NavBar />
                </div>

                <main className="md:w-6/12 w-10/12 mt-10 mx-auto md:-mt-130 md:ml-145 relative z-50">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Root;
