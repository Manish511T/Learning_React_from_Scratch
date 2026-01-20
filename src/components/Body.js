import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5456897&lng=77.3882686&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await response.json();

      // 🔥 STEP 1: Extract only restaurant cards
      const restaurantCards = json?.data?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
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

  if(listOfRestaurants.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="body">
      {/* FILTER SECTION */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.rating > 4
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* RESTAURANT LIST */}
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
