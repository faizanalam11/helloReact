import { Outlet } from "react-router-dom";

const About = () => {
    return (
            <section className="flex flex-col mx-auto max-w-96">
                <h1 className="font-extrabold text-4xl mx-auto my-2">About US</h1>
                <h2 className="font-bold mx-auto my-2">Aahar villa a food delivery web App</h2>
                <Outlet/>
            </section>
    );
};

export default About;