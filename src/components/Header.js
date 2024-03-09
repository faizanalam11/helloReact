import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/"><img alt="logo" id="logo" src="https://yt3.googleusercontent.com/HipIhegQlrlSzBGZSUtOPYyA2VGbo2qyXmIdYNkodW-HVF01t5CX-MrXoDKnf9R5UErOmCbnbA=s900-c-k-c0x00ffffff-no-rj"/></a>
);

const Header = () => {
    [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact" ><li>Contact</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Log Out</button>) : (<button onClick={() => setIsLoggedIn(true)}>Log In</button>)
            }
        </div>);
};

export default Header;