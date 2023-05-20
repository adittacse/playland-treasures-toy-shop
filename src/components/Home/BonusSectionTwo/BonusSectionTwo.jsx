import React from 'react';

const BonusSectionTwo = () => {
    const img = "https://images.unsplash.com/photo-1550432163-9cb326104944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
    
    return (
        <section className="py-12 mb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold mb-4">Discover the Joy of Toys</h2>
                    <p className="text-lg text-center mb-6">
                        Our toy shop offers a wide selection of toys for all ages. From educational toys to action figures, puzzles to board games, there's something for everyone. Experience the magic of play and create lasting memories with our carefully curated collection.
                    </p>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full">
                        Explore Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BonusSectionTwo;