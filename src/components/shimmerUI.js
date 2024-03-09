const Shimmer = () => {
    return (
        <div className="shimmy">
            {Array(10).fill("").map((e, index) => <div key={index} className="shimmer_card"></div>)};
        </div>
    );
}

export default Shimmer;