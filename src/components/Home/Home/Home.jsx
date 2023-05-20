import React from 'react';
import useTitle from "../../../hooks/useTitle.jsx";
import ToysCategory from "../ToysCategory/ToysCategory.jsx";
import Banner from "../Banner/Banner.jsx";
import BonusSectionOne from "../BonusSectionOne/BonusSectionOne.jsx";
import BonusSectionTwo from "../BonusSectionTwo/BonusSectionTwo.jsx";

const Home = () => {
    useTitle("Home");
    
    return (
        <div>
            <Banner></Banner>
            <ToysCategory></ToysCategory>
            <BonusSectionOne></BonusSectionOne>
            <BonusSectionTwo></BonusSectionTwo>
        </div>
    );
};

export default Home;