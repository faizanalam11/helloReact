import Shimmer from "./shimmerUI";
import UseRestaurantMenu from "../utils/UseRestaurantMenu";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    console.log(resId);
    const resInfo= UseRestaurantMenu(4046);

    if(resInfo === null){
        return (
            <Shimmer/>
        )
    }

    const name = resInfo?.cards[2]?.card?.card?.info?.name;
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
    const costForTwoMessage = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}
            </p>
        </div>
      )
}

export default RestaurantMenu;