import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer';

const RootLayout = () => {
    return (
        <div>
           <Home/>
            <Outlet/>
            
            <Footer/>
        </div>
    );
};

export default RootLayout;