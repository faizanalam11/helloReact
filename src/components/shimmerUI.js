const Shimmer = () => {
    return (
        <div className="flex flex-wrap mx-16">
            {Array(10).fill("").map((e, index) => <div key={index} className="bg-gray-300 w-52 h-52 m-2"></div>)}
        </div>
    );
}

export default Shimmer;