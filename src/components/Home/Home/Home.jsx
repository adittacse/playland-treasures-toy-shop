import React from 'react';
import useTitle from "../../../hooks/useTitle.jsx";
import ToysCategory from "../ToysCategory/ToysCategory.jsx";

const Home = () => {
    useTitle("Home");
    
    return (
        <div>
            <ToysCategory></ToysCategory>
        </div>
    );
};

export default Home;