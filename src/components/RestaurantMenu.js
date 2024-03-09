import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {id} = useParams();

    useEffect(() => {
        getRestaurantsInfo();
    }, []);

    async function getRestaurantsInfo(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&menuId=229");
        const responseJson = await response.json();
        console.log(responseJson);
    }

    return (
        <div>
            <h1>Restaurant id: { id }</h1>
            <h2>Hello</h2>
        </div>
    );
};

export default RestaurantMenu;