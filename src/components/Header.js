import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo2.jpg";
import cartWhite from "../assets/image/cartWhite.png";
import useOnline from "../utils/useOnline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Title = () => (
    <div id="logo" className="flex my-auto mx-2">
        <a href="/">
            <img className="h-20 p-1" src={Logo} alt="logo"/>
        </a>
    </div>
);

const Header = () => {
    const isOnline = useOnline();
    const login = () => {
        toast.success("LoggedIn Successfull", { position: "bottom-center"});
    }

    const logout = () => {
        toast.success("LoggedOut Successfull", { position: "bottom-center"});
    }

    const handleAuthAction = () => {
        if (isLoggedIn) {
          logout();
          setIsLoggedIn(false);
        } else {
          login();
          setIsLoggedIn(true);
        }
      };

    [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="flex justify-between bg-[#242529] shadow-2xl">
            <Title/>
            <ToastContainer className="toaster"/>
            <div className="nav-items">
                <ul className="flex p-2 my-3">
                    <li className="py-1 px-2 m-2 text-white hover:text-black hover:bg-[#008ca8] rounded-lg"><Link to="/">Home</Link></li>
                    <li className="py-1 px-2 m-2 text-white hover:text-black hover:bg-[#008ca8] rounded-lg"><Link to="/about">About</Link></li>
                    <li className="py-1 px-2 m-2 text-white hover:text-black hover:bg-[#008ca8] rounded-lg"><Link to="/contact" >Contact</Link></li>
                    <li className="py-1 px-2 m-2 hover:bg-[#008ca8] rounded-lg"><img className="" src={cartWhite} alt="cart"/></li>
                    <li onClick={handleAuthAction} className="py-1 px-2 m-2 text-white hover:text-black hover:bg-[#008ca8] rounded-lg cursor-pointer">
                        {isOnline ? (isLoggedIn ? (<Link to="/">Logout 🟢</Link>) : (<Link to="/login">Login 🟢</Link>)) : (isLoggedIn ? ("Logout 🔴") : ("Login 🔴")) }
                    </li>
                </ul>
            </div>
        </div>);
};

export default Header;