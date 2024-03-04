import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";


const useListofRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        console.log(json);
        // optional chaining
        setListOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    return (listOfRestaurants, filteredRestaurant)
}
export default useListofRestaurants