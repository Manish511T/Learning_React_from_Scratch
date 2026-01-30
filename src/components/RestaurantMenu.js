
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
