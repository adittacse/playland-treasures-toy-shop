import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../components/Layout/Main.jsx";
import Home from "../components/Home/Home/Home.jsx";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import SignUp from "../components/SignUp/SignUp.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;