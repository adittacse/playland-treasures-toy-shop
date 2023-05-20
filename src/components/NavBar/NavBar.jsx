import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../Providers/AuthProviders.jsx";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const logo = "https://i.ibb.co/WzH30fw/Screenshot-6.png";
    
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                        <li><Link to="/toys" className="text-white hover:text-gray-300">All Toys</Link></li>
                        {user && (
                            <>
                                <li><Link to="/my-toys" className="text-white hover:text-gray-300">My Toys</Link></li>
                                <li><Link to="/add-toy" className="text-white hover:text-gray-300">Add A Toy</Link></li>
                            </>
                        )}
                        <li><Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link></li>
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="Website Logo" className="w-48 h-12 mb-4" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                    <li><Link to="/toys" className="text-white hover:text-gray-300">All Toys</Link></li>
                    {user && (
                        <>
                            <li><Link to="/my-toys" className="text-white hover:text-gray-300">My Toys</Link></li>
                            <li><Link to="/add-toy" className="text-white hover:text-gray-300">Add A Toy</Link></li>
                        </>
                    )}
                    <li><Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-hover dropdown-end">
                        <img src={user?.photoURL} alt="User Profile" className="w-10 h-10 m-1 rounded-full"/>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>{user?.displayName}</a></li>
                            <li><Link onClick={() => logOut()
                                .then(() => {})
                                .catch(error => {
                                    console.log(error);
                                })}>Logout</Link></li>
                        </ul>
                    </div>
                ) : (
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
                        <li><Link to="/register" className="text-white hover:text-gray-300">Register</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NavBar;