import React from 'react';
import {Link} from "react-router-dom";

const ToyCard = ({ toy }) => {
    const {_id, toyName, picture, category, price, ratingFloat, quantity} = toy;
    
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure className="h-72">
                <img src={picture} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold mb-4">{toyName}</h2>
                <div className="card-actions justify-center mb-4">
                    <div className="badge badge-outline p-4">Price: ${price}</div>
                    <div className="badge badge-outline p-4">Ratings: {ratingFloat} Star</div>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn bg-error text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;