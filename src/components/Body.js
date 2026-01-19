import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
            resList.map((restaurant, index)=>(
                <RestaurantCard key={index} resData={restaurant} />
                // Not using keys (not accepted) <<<< index as key <<<< unique id
            ))
        }
      </div>
    </div>
  );
};

export default Body;