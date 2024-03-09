import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer"

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
                element: <About/>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                    },
                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);