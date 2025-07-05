import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';

const Root = () => {
    return (
        <div className="">
            <div className="">
                <NavBar />
            </div>

            <main className="w-6/12 mx-auto -mt-130 ml-145 relative z-50">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Root;
