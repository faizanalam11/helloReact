import { useEffect, useState } from "react";
import { MENU_API } from "../config";

const UseRestaurantMenu = (resId) => {
    console.log(`this is use res menu ${resId}`);
    const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);
    useEffect(() => {
        getRestaurantsInfo();
    }, []);

    async function getRestaurantsInfo(){
        const url = `${MENU_API}${resId}`
        const response = await fetch(url);
        const responseJson = await response.json();
        setRestaurantMenuInfo(responseJson?.data);
    }

    return (
        restaurantMenuInfo
    );
};

export default UseRestaurantMenu;