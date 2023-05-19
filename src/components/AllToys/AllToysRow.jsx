import React, {useContext} from 'react';
import {AuthContext} from "../../Providers/AuthProviders.jsx";

const AllToysRow = ({ toy }) => {
    const {user} = useContext(AuthContext);
    const {_id, toyName, picture, sellerName, category, price, ratingFloat, quantity, description} = toy;
    
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50 lg:w-1/3">{ratingFloat} Ratings</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{sellerName}</div>
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
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{quantity} Piece</div>
                </div>
            </td>
            <th>
                <div className="flex flex-col">
                    <button className="btn bg-error text-white">View Details</button>
                </div>
            </th>
        </tr>
    );
};

export default AllToysRow;