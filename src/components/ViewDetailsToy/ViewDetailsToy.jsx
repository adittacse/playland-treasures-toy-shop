import React, {useState} from 'react';
import {useLoaderData} from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ViewDetailsToy = () => {
    const toy = useLoaderData();
    const {_id, toyName, picture, sellerName, email, category, price, ratingFloat, quantity, description} = toy;
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-center">{toyName}</h1>
                        <div className="flex justify-center align-middle gap-40 mt-8 mb-8">
                            <div>
                                <p className="pt-6">Available Quantity: {quantity} Piece</p>
                                <p className="pt-6">Category: {category}</p>
                                <p className="pt-6">Price: ${price}</p>
                                <p className="pt-6 flex items-center">Ratings: <Rating style={{ maxWidth: 150 }} value={ratingFloat} readOnly /> {ratingFloat} Star</p>
                            </div>
                            <div>
                                <p className="pt-6">Seller Name: {sellerName}</p>
                                <p className="pt-6">Seller Email: {email}</p>
                            </div>
                        </div>
                        <p className="py-6 w-[80%] mx-auto">Description: {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsToy;