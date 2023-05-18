import React from 'react';

const NavBar = ({ isLoggedIn, username }) => {
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
                    {isLoggedIn && (
                        <>
                            <a href="/mytoys" className="text-white hover:text-gray-300">My Toys</a>
                            <a href="/addtoy" className="text-white hover:text-gray-300">Add A Toy</a>
                        </>
                    )}
                    <a href="/blogs" className="text-white hover:text-gray-300">Blogs</a>
                    {isLoggedIn ? (
                        <div className="relative">
                            <img
                                src="/path/to/profile-picture.png"
                                alt="User Profile"
                                className="w-8 h-8 rounded-full cursor-pointer"
                            />
                            <span className="absolute -bottom-2 -right-2 bg-white rounded-full text-xs px-1">
                {username}
              </span>
                        </div>
                    ) : (
                        <>
                            <a href="/login" className="text-white hover:text-gray-300">Login</a>
                            <a href="/register" className="text-white hover:text-gray-300">Register</a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;