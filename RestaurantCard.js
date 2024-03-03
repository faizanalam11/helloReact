import { IMG_CDN_URL } from "./config";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRatingString}) => {
    return (
        <div className="card">
            <img src= {IMG_CDN_URL + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} ⭐</h4>
        </div>
    );
};

export default RestaurantCard;