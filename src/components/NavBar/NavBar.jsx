import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders.jsx';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/path/to/logo.png" alt="Website Logo" className="w-8 h-8 mr-2" />
                    <span className="text-white font-bold text-lg">Toy Shop</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/" className="text-white hover:text-gray-300">Home</a>
                    <a href="/toys" className="text-white hover:text-gray-300">All Toys</a>
                    {user && (
                        <>
                            <a href="/my-toys" className="text-white hover:text-gray-300">My Toys</a>
                            <a href="/add-toy" className="text-white hover:text-gray-300">Add A Toy</a>
                        </>
                    )}
                    <a href="/blogs" className="text-white hover:text-gray-300">Blogs</a>
                </div>
                
                <div className="flex items-end space-x-4">
                    {user ? (
                        <div className="dropdown dropdown-hover dropdown-end">
                            <img src={user.photoURL} alt="User Profile" className="w-10 h-10 m-1 rounded-full"/>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user.displayName}</a></li>
                                <li><Link onClick={() => logOut()
                                    .then(() => {})
                                    .catch(error => {
                                        console.log(error);
                                    })}>Logout</Link></li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                            <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
