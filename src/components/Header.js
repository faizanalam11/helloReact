import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Title = () => (
    <div id="logo">
        <a href="/">
            <img className="h-20 m-3 p-1" src={Logo} alt="logo"/>
        </a>
    </div>
);

const Header = () => {
    const login = () => {
        toast.success("LoggedIn Successfull", { position: "bottom-center"});
    }

    const logout = () => {
        toast.success("LoggedOut Successfull", { position: "bottom-center"});
    }
    [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="flex justify-between bg-[#242529] shadow-lg">
            <Title/>
            <div className="nav-items">
                <ul className="flex p-2 my-7">
                    <li className="px-2 text-white"><Link to="/">Home</Link></li>
                    <li className="px-2 text-white"><Link to="/about">About</Link></li>
                    <li className="px-2 text-white"><Link to="/contact" >Contact</Link></li>
                    <li className="px-2 text-white">Cart</li>
                </ul>
            </div>
            <ToastContainer className="toaster"/>
            {
                isLoggedIn ? (<button className="mx-6 my-7 p-2 flex bg-[#008ca8] rounded-lg text-white min-w-20 justify-center" onClick={() => {
                    logout();
                    setIsLoggedIn(false);
                }}>Logout</button>) : (<button className="mx-6 my-7 p-2 flex bg-[#008ca8] rounded-lg text-white min-w-20 justify-center" onClick={() => {
                    login();
                    setIsLoggedIn(true);
                }}>Login</button>)
            }
        </div>);
};

export default Header;