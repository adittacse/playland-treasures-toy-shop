import React, {useEffect, useState} from 'react';
import AllToysRow from "./AllToysRow.jsx";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    
    useEffect( () => {
        fetch("https://playland-treasures-server.vercel.app/toys")
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    },[]);
    
    return (
        <div>
            <h2 className="text-center text-5xl mt-10 mb-10">All Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full mb-16">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                        toys.map(toy => <AllToysRow key={toy._id} toy={toy}></AllToysRow>)
                    }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllToys;