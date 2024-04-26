import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchText, setSearchText] = useState(""); //Returns an array --> [variable name, function to update the variable]

    useEffect(() => {
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const responseJson = await response.json();
        console.log(responseJson);
        const initialRestaurant = responseJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurants(initialRestaurant);            
        setFilteredRestaurants(initialRestaurant);
    }

    const isOnline = useOnline();
    if(!isOnline){
        return (
            <div className="text-center">
                <h1 className="m-auto">🔴 Please check you internet connection!!</h1>
            </div>
        );
    }

    if(!allRestaurants){
        return <Shimmer/>
    }

    return allRestaurants?.length === 0 ? (
        <Shimmer/>
        ) : (
        <div className="flex flex-col">
            <div className="mx-auto  my-2">
                <input type="text" className="bg-[#d3d3d34d] focus:bg-gray-200 hover:bg-gray-200 min-w-96 rounded-l-lg p-2 focus:border-[#008ca8] m-auto" placeholder="Search a restaurant you want..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="p-2 bg-[#008ca8] rounded-r-lg text-white" 
                onClick={() => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="flex flex-wrap">
                {   
                    filteredRestaurants?.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant?.info?.id}
                            key={restaurant?.info?.id}>
                                <RestaurantCard {...restaurant?.info}/>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Body;