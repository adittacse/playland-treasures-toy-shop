import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../components/Layout/Main.jsx";
import Home from "../components/Home/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;