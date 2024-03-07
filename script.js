import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import Error from "./Error";
import Contact from "./contact";
import RestaurantMenu from "./RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => 
        (<>
            <Header/>
            < Outlet />
            <Footer/>
        </>);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/about",
                element: <About/>,
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