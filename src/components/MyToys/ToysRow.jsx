import React from 'react';

const ToysRow = ({ toy }) => {
    const {_id, toyName, picture, category, subCategory, price, ratingFloat, quantity, description} = toy;
    
    return (
        <tr>
            <th>
                <button className="btn btn-circle btn-sm">
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
                    <div className="text-sm opacity-50">{subCategory}</div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">${price}</div>
                    <div className="text-sm opacity-50">{ratingFloat} Star</div>
                </div>
            </td>
            <th>
                <div className="flex flex-col">
                    <button className="btn bg-error text-white">View Details</button>
                    <button className="btn bg-error text-white">Update Toy</button>
                </div>
            </th>
        </tr>
    );
};

export default ToysRow;