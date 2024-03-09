import  { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div className="ErrorModule">
            <div>
                <img src="https://www.shoutmeloud.com/wp-content/uploads/2022/10/3024049-ai.svg"></img>
            </div>
            <div>
                <h1>OOPS!!!</h1>
                <h2>Something went wrong...</h2>
                <h3>{err.status + " : " + err.statusText}</h3>
            </div>
        </div>
    );
};

export default Error;