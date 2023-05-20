import React from 'react';
import useTitle from "../../../hooks/useTitle.jsx";
import ToysCategory from "../ToysCategory/ToysCategory.jsx";
import Banner from "../Banner/Banner.jsx";

const Home = () => {
    useTitle("Home");
    
    return (
        <div>
            <Banner></Banner>
            <ToysCategory></ToysCategory>
        </div>
    );
};

export default Home;