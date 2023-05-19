import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../Providers/AuthProviders.jsx";
import ToysRow from "./ToysRow.jsx";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    
    const url = `http://localhost:3000/toys?email=${user?.email}`;
    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    },[url]);
    
    return (
        <div className="mb-10">
            <h2 className="text-center text-5xl mt-10 mb-10">My Total Toys: {toys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Category & Subcategory</th>
                        <th>Price & Ratings</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                        toys.map(toy => <ToysRow key={toy._id}
                                                            toy={toy}></ToysRow>)
                    }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Category & Subcategory</th>
                        <th>Price & Ratings</th>
                        <th></th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyToys;