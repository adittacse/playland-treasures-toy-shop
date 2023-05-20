import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaGoogle} from "react-icons/fa";
import img from "../../assets/login.jpg";
import {AuthContext} from "../../Providers/AuthProviders.jsx";
import useTitle from "../../hooks/useTitle.jsx";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    useTitle("Login");
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";
    
    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                setSuccess("Login successful!");
            })
            .catch(error => {
                setError("Wrong Credentials!");
            })
    }
    
    const handleGoogleSignIn = () => {
        setSuccess("");
        
        googleSignIn()
            .then(result => {
                setError("");
                const loggedUser = result.user;
                setSuccess("User logged in successfully!");
            })
            .catch(error => {
                setError(error.message);
            })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-44">
                    <img src={img} alt="Login Image"/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center mb-10">Login Here</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control mb-5">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label mt-5">
                                    <p className="label-text-alt">New to website? <Link to="/register" className="text-[#FF3811] font-bold link link-hover">Please Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login"/>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        
                        <div className="text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-circle">
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                        
                        <p className="text-success text-center">{success}</p>
                        <p className="text-warning text-center">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;