import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../components/Layout/Main.jsx";
import Home from "../components/Home/Home/Home.jsx";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import SignUp from "../components/SignUp/SignUp.jsx";
import Login from "../components/Login/Login.jsx";
import AddToy from "../components/AddToy/AddToy.jsx";
import MyToys from "../components/MyToys/MyToys.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

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
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/addtoy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "/my-toys",
                element: <MyToys></MyToys>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;