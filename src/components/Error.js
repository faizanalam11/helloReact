import  { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div className="flex justify-center m-auto">
            <div>
                <img src="https://www.shoutmeloud.com/wp-content/uploads/2022/10/3024049-ai.svg"></img>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold">OOPS!!!</h1>
                <h2 className="font-semibold">Something went wrong...</h2>
                <h3 className="font-medium">{err.status + " : " + err.statusText}</h3>
            </div>
        </div>
    );
};

export default Error;