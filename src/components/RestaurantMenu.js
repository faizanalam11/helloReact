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
    const avgRating = resInfo?.cards[2]?.card?.card?.info?.avgRating;
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
    const costForTwoMessage = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;
    const locality = resInfo?.cards[2]?.card?.card?.info?.locality;
    const totalRatingsString = resInfo?.cards[2]?.card?.card?.info?.totalRatingsString;

    return (
        <div className="w-[80%] mx-auto my-24">
            <h1 className="font-bold text-2xl">{name}</h1>
            <div className="flex w-[80%] mx-auto justify-between my-2 p-2 border-2">
                <img src={restaurantImage} alt={name}/>
                <div className="font-bold">
                    <span className="bg-green-500 w-14 rounded-lg p-1">{avgRating}⭐</span> ({totalRatingsString})  . {costForTwoMessage}
                    <p className="text-orange-700">{cuisines.join(", ")}</p>
                    <p>Outlet : {locality}</p>
                </div>
            </div>
        </div>
      )
}

export default RestaurantMenu;