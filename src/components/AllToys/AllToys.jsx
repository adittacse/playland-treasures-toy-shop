import React, {useEffect, useState} from 'react';
import AllToysRow from "./AllToysRow.jsx";
import useTitle from "../../hooks/useTitle.jsx";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    useTitle("All Toys");
    
    useEffect( () => {
        fetch("https://playland-treasures-server.vercel.app/toys")
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    },[]);
    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    
    const filteredToys = toys.filter(toy =>
        toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <div>
            <h2 className="text-center text-5xl mt-10 mb-10">All Toys</h2>
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-2"
                    placeholder="Search Toy Here"
                    value={searchQuery}
                    onChange={handleSearchChange}/>
            </div>
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
                        filteredToys.map(toy => <AllToysRow key={toy._id} toy={toy}></AllToysRow>)
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