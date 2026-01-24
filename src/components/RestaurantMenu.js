import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

//   console.log(resId);
  const fetchMenu = async () => {
    // console.log("useEffect called");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5456897&lng=77.3882686&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const json = await data.json();

    // console.log(json);

    const restaurants =
      json?.data?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      ) || [];

    const selectedRestaurant = restaurants.find(
      (r) => r?.card?.card?.info?.id === resId,
    );

    setResInfo(selectedRestaurant?.card?.card?.info || null);
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwo, locality, areaName } = resInfo;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <p>{locality}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantMenu;
