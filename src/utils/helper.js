export function filterData(searchText, allRestaurants){
    const filterData = allRestaurants?.filter((restaurant) => 
        restaurant?.info?.name?.toUpperCase()?.includes(searchText.toUpperCase())
    );
    return filterData;
}