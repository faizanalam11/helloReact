import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div className="about">
            <section className="top">
                <h1>About US !</h1>
                <p>Food villa a food delivery web App</p>
                <Outlet/>
            </section>
            
        </div>
    );
};

export default About;