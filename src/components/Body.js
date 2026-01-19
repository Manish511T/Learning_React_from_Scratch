import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";
import { useState } from "react";


const Body = () => {
    //Local state Variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button
                    onClick={() => {
                        // console.log("Button clicked");
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.rating > 4,
                        );
                        setListOfRestaurants(filteredList);
                        console.log(listOfRestaurants);
                    }}
                    className="filter-btn"
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} resData={restaurant} />
                    // Not using keys (not accepted) <<<< index as key <<<< unique id
                ))}
            </div>
        </div>
    );
};

export default Body;
