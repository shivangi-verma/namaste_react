import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from '../utils/mockData';
import Shimmer from "./Shimmer";
// import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListofRestaurants from "../utils/useListofRestaurants";

const Body = () => {
    // local state variables
    const [searchText, setSearchText] = useState("");
    // const [listOfRestaurants, setListOfRestaurants] = useState([]);
    // const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch(SWIGGY_API_URL);
    //     const json = await data.json();
    //     console.log(json);
    //     // optional chaining
    //     setListOfRestaurants(
    //         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //     );
    //     setFilteredRestaurant(
    //         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //     );
    // };

    const onlineStatus = useOnlineStatus()
    if (onlineStatus == false)
        return <h1>Looks like you are offline! Please check your internet!! </h1>
    const listOfRestaurants = useListofRestaurants()
    const filteredRestaurant = useListofRestaurants()
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
    console.log("listOfRestaurants", listOfRestaurants);
    // conditional rendering
    return listOfRestaurants === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="bg-green-100 px-4 mx-4"
                        onClick={() => {
                            // filter the restaurant card and update the UI
                            // searchText
                            console.log(searchText);
                            let filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="bg-green-100 px-4 mx-4 py-0"
                    onClick={() => {
                        // filter logic here
                        console.log("btn-clicked");
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setFilteredRestaurant(filteredList);
                        // Update filteredRestaurant state
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                        {/* if the restaurant is promoted then add a promoted label to it */}
                        {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}

                    </Link>
                ))}
            </div>
        </div >
    );
};

export default Body;
