import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menuItems } = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwo, locality, areaName } = resInfo;

  return (
    <div className="menu p-4">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p>
        {cuisines.join(", ")} • {costForTwo}
      </p>
      <p>{locality}, {areaName}</p>

      <h2 className="mt-6 text-xl font-semibold">Menu</h2>

      {menuItems.map((category) => (
        <div key={category.card.card.title} className="mt-4">
          <h3 className="font-bold">{category.card.card.title}</h3>

          {category.card.card.itemCards.map((item) => (
            <p key={item.card.info.id}>
              {item.card.info.name} - ₹
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
