import React from 'react';

const ErrorPage = () => {
    const img = "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684421428~exp=1684422028~hmac=694314c5bf51cacdf756d794ffb733869f7b9f0d04d1db95e55e62399c06e21c";
    
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900">404</h1>
                <p className="text-2xl font-medium text-gray-700 mb-4">Oops! Page not found.</p>
                <img src={img} alt="404 Error" className="w-64 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
                <a href="/" className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">Go back to Home</a>
            </div>
        </div>
    );
};

export default ErrorPage;