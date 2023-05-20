import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../Providers/AuthProviders.jsx";
import {updateProfile} from "firebase/auth";
import img from "../../assets/login.jpg";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle.jsx";

const SignUp = () => {
    const {createUser, googleSignIn, logOut} = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    useTitle("Register");
    const [error, setError] = useState("");
    
    const handleSignUp = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        
        if (password !== confirmPassword) {
            setError("Invalid password");
            return
        }
        
        //validate password
        if(!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at least one uppercase");
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Please add at least two numbers");
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError("Please add a special character in your password");
            return;
        } else if (password.length < 6) {
            setError("Please add at least 6 characters in your password!");
            return;
        }
        
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                logOut()
                    .then( () => {})
                    .catch(error => {
                        setError(error.message);
                    });
                updateProfile(createdUser, {
                    displayName: name, photoURL: photoUrl
                })
                    .then(() => {})
                    .catch(error => {
                        setError(error.message);
                    })
                setSuccess("User has been successfully created!");
            })
            .catch(error => {
                setError(error.message);
            })
    }
    
    const handleGoogleSignIn = () => {
        setSuccess("");
        
        googleSignIn()
            .then(result => {
                setError("");
                const createdUser = result.user;
                console.log(createdUser);
                logOut()
                    .then(() => {})
                    .catch(error => {
                        setError(error.message);
                    });
                setSuccess("User has been successfully created!");
            })
            .catch(error => {
                setError(error.message);
            });
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-44">
                    <img src={img} alt="Register Image"/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center mb-10">Sign Up Here</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control mb-5">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-5">
                                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-5">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-5">
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" required />
                                <label className="label mt-5">
                                    <p className="label-text-alt">Already have an account? <Link to="/login" className="text-[#FF3811] font-bold link link-hover">Please Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Sign Up"/>
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

export default SignUp;