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
                    <a href="/" className="text-white hover:text-gray-300">
                        Home
                    </a>
                    <a href="/toys" className="text-white hover:text-gray-300">
                        All Toys
                    </a>
                    {user && (
                        <>
                            <a href="/mytoys" className="text-white hover:text-gray-300">
                                My Toys
                            </a>
                            <a href="/addtoy" className="text-white hover:text-gray-300">
                                Add A Toy
                            </a>
                        </>
                    )}
                    <a href="/blogs" className="text-white hover:text-gray-300">
                        Blogs
                    </a>
                    
                    {user ? (
                        <div className="dropdown dropdown-hover dropdown-end">
                            <img src={user.photoURL} alt="User Profile" className="w-8 h-8 m-1 rounded-full"/>
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
                            <a href="/login" className="text-white hover:text-gray-300">
                                Login
                            </a>
                            <Link to="/register" className="text-white hover:text-gray-300">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
