import { useEffect, useState } from "react";
import { MENU_API } from "../config";

const UseRestaurantMenu = (resId) => {
    const [restaurantMenuInfo, setRestaurantMenuInfo] = useState();
    useEffect(() => {
        getRestaurantsInfo();
    }, []);

    async function getRestaurantsInfo(){
        const response = await fetch(MENU_API + resId);
        const responseJson = await response.json();
        console.log(responseJson.data);
        setRestaurantMenuInfo(responseJson?.data);
    }

    return (
        restaurantMenuInfo
    );
};

export default UseRestaurantMenu;