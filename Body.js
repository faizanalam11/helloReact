import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmerUI";

function filterData(searchText, allRestaurants){
    const filterData = allRestaurants.filter((restaurant) => 
        restaurant?.info?.name?.toUpperCase()?.includes(searchText.toUpperCase())
    );
    return filterData;
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(""); //Returns an array --> [variable name, function to update the variable]

    useEffect(() => {
        getRestaurants();
    },[]);
    //when i kept my dependency array empty i got undefined

    async function getRestaurants(){
        try{
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
            const responseJson = await response.json();

            console.log(responseJson);            setAllRestaurants(responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch{
            return <h1>Error 404!!!</h1>
        }
    }

    if(filteredRestaurants?.length === 0) return <h1>Not Restaurants Found!!!!!!</h1>

    return allRestaurants?.length === 0 ? (
        <Shimmer/>
        ) : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search Food" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="search-btn" 
                onClick={() => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurantList">
                {   
                    filteredRestaurants?.map((restaurant) => {
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
                    })
                }
            </div>
        </>
    );
}

export default Body;