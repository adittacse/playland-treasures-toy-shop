import React from 'react';

const BonusSectionOne = () => {
    const img = "https://images.unsplash.com/photo-1550432163-9cb326104944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
    
    return (
        <section className="toy-shop-section py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div className="lg:w-1/2 lg:pr-10">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Discover the Joy of Toys</h2>
                        <p className="text-lg mb-6">
                            Explore our wide collection of toys that will bring endless fun and joy to children of all ages. From educational toys to imaginative playsets, we have something for every child's interest and curiosity.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Shop Now</button>
                    </div>
                    <div className="lg:w-1/2">
                        <img src={img} alt="Toy Shop" className="w-full h-auto rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BonusSectionOne;