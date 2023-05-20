import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider,} from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="bg-gray-800">
        <AuthProviders>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </AuthProviders>
    </div>
)
