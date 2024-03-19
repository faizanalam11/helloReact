import Shimmer from "./shimmerUI";
import UseRestaurantMenu from "../utils/UseRestaurantMenu";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();
    const resInfo= UseRestaurantMenu(resId);

    if(resInfo === null){
        return (
            <Shimmer/>
        )
    }

    const name = resInfo?.cards[0]?.card?.card?.info?.name;
    const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines;
    const costForTwoMessage = resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage;

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}
            </p>
        </div>
      )
}

export default RestaurantMenu;