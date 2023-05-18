import React from 'react';
import NavBar from "../NavBar/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;