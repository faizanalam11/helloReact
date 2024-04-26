import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/contact"));

const AppLayout = () => 
        (<>
            <Header/>
            < Outlet />
            <Footer/>
        </>)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={<h1 className="center">Loading....</h1>}><About/></Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                    },
                ]
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h1 className="center">Loading....</h1>}><Contact/></Suspense>
            },
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);