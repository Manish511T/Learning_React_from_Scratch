import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, [resId]); 

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
      );

      const json = await response.json();
      console.log(json)

      // ✅ 1. Extract restaurant info
      const restaurantInfo =
        json?.data?.cards?.find(
          (c) => c?.card?.card?.info
        )?.card?.card?.info;

      setResInfo(restaurantInfo || null);

      // ✅ 2. Extract menu categories
      const regularCards =
        json?.data?.cards
          ?.find((c) => c?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const categories = regularCards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setMenuItems(categories);
      console.log(menuItems)
    } catch (err) {
      console.error("Menu fetch failed", err);
    }
  };

  return { resInfo, menuItems };
};

export default useRestaurantMenu;
