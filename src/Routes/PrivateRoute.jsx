import React, {useContext} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../Providers/AuthProviders.jsx";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return <progress className="progress progress-warning w-56 flex mx-auto mt-10 mb-10"></progress>;
    }
    
    if (user?.email) {
        return children;
    }
    
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;