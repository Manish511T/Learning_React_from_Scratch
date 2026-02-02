import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants",
      );
      const json = await response.json();

      const rawRestaurants =
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      // ✅ NORMALIZATION STEP
      const normalizedRestaurants = rawRestaurants.map((res) => {
        const info = res.info;

        return {
          id: info.id,
          name: info.name,
          cuisines: info.cuisines,
          rating: info.avgRating,
          costForTwo: info.costForTwo,
          deliveryTime: info.sla?.slaString,
          imageId: info.cloudinaryImageId,
          promoted: info.avgRating > 4.5, // 👈 fake logic for learning
        };
      });

      setListOfRestaurants(normalizedRestaurants);
      setFilteredRestaurants(normalizedRestaurants);
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

  console.log(filteredRestaurants);

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
            {/* if the restaurant is promoted then add a promoted label to it */}
            {restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
