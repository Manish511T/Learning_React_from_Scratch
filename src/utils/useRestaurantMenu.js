import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    // fetchdata

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5456897&lng=77.3882686&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
        );

        const json = await data.json();

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

    return resInfo;
};

export default useRestaurantMenu;
