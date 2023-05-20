import React from 'react';
import {Link} from "react-router-dom";

const BonusSectionThree = () => {
    const img = "https://plus.unsplash.com/premium_photo-1661964217492-70800dc09cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG95JTIwc2hvcHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
    
    return (
        <section className="toy-shop-section mb-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
                    <div className="max-w-sm rounded-lg shadow-2xl">
                        <img src={img} alt="Toy Shop" className="w-full h-auto rounded-xl" />
                    </div>
                    <div className="lg:w-1/2 lg:pr-10">
                        <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4">Best Toy Shop in Your Country!</h2>
                        <p className="text-white text-lg mb-6">
                            Our country's best toy shop is a magical wonderland where imagination comes to life, offering a vast selection of toys that inspire joy, creativity, and endless adventures for children of all ages.
                        </p>
                        <Link to="/toys">
                            <button className="btn btn-error text-white">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BonusSectionThree;