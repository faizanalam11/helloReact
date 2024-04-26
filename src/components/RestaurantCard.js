import { IMG_CDN_URL } from "../config"

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
    return (
        <div className="bg-[#d3d3d34d] hover:bg-gray-200 hover:scale-105 w-56 m-3 p-2 min-h-72 shadow-lg">
            <img className="w-52 m-auto" src= {IMG_CDN_URL + cloudinaryImageId}/>
            <h2 className="font-bold text-lg">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h6 className="bg-green-500 w-14 rounded-lg p-1">{avgRating} ⭐</h6>
        </div>
    );
};

export default RestaurantCard;