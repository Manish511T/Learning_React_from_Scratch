import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5456897&lng=77.3882686&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
      );

      const json = await response.json();

      // 🔥 STEP 1: Extract only restaurant cards
      const restaurantCards = json?.data?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      );

      // 🔥 STEP 2: Normalize data (VERY IMPORTANT)
      const restaurants = restaurantCards.map((item) => {
        const info = item.card.card.info;

        return {
          id: info.id,
          name: info.name,
          cuisines: info.cuisines,
          rating: info.avgRating,
          costForTwo: info.costForTwo,
          deliveryTime: info.sla?.slaString,
          imageId: info.cloudinaryImageId,
        };
      });

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        {" "}
        Looks like you're offline!! Please check your internet connection
      </h1>
    );
  }

  // ternary oprator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* FILTER SECTION */}
      <div className="filter flex">
        {/* SEARCH */}
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-gray-700"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-0.5 mx-4 bg-green-300 rounded-md "
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-4 py-0.5 bg-gray-200 rounded-md"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => res.rating > 4.1,
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* RESTAURANT LIST */}
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
