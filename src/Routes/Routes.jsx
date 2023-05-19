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
import UpdateToy from "../components/UpdateToy/UpdateToy.jsx";
import AllToys from "../components/AllToys/AllToys.jsx";

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
                path: "/add-toy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "/my-toys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "/update-toy/:id",
                element: <UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`http://localhost:3000/toy/${params.id}`)
            },
            {
                path: "/toys",
                element: <AllToys></AllToys>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;