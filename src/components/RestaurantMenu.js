import Shimmer from "./shimmerUI";
import UseRestaurantMenu from "../utils/UseRestaurantMenu";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
    const { resId } = useParams();
    console.log(resId);
    const resInfo= UseRestaurantMenu(resId);

    if(resInfo === null){
        return (
            <Shimmer/>
        )
    }

    const restaurantImage = {IMG_CDN_URL} + resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId;
    const name = resInfo?.cards[2]?.card?.card?.info?.name;
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
    const costForTwoMessage = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;

    return (
        <div className="p-2">
            <img src={restaurantImage} alt={name}/>
            <h1 className="font-bold">{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}
            </p>
        </div>
      )
}

export default RestaurantMenu;