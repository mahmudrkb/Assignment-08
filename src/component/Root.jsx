import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {

    return (
        <div className="container mx-auto md:p-5 my-5">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

            
           
            
        </div>
    );
};

export default Root;