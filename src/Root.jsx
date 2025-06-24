import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50 bg-white shadow">
                <NavBar />
            </div>

            {/* Page Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Root;
