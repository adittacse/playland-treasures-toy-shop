import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import {Link} from "react-router-dom";

const ToysRow = ({ toy, handleDelete }) => {
    const {_id, toyName, picture, category, price, ratingFloat, quantity} = toy;
    
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50 lg:w-1/3">{quantity} Piece Available</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{category}</div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">${price}</div>
                    <div className="text-sm opacity-50 mt-1">
                        <Rating style={{ maxWidth: 150 }} value={ratingFloat} readOnly />
                    </div>
                    <div className="text-sm opacity-50 mt-1">{ratingFloat} Ratings</div>
                </div>
            </td>
            <th>
                <div className="flex flex items-center justify-center">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn bg-error text-white">View Details</button>
                    </Link>
                    <Link to={`/update-toy/${_id}`}>
                        <button className="btn bg-error text-white w-full">Update Toy</button>
                    </Link>
                </div>
            </th>
        </tr>
    );
};

export default ToysRow;