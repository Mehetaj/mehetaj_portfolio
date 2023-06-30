import React from 'react';
import Navbar from '../Pages/Home/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer/Footer';


const Main = () => {
    
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;