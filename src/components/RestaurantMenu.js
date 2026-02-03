import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menuItems } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwo, locality, areaName } = resInfo;

  return (
    <div className="menu p-4 max-w-3xl mx-auto">
      {/* Restaurant Info */}
      <h1 className="text-3xl font-bold my-6 text-center">{name}</h1>
      <p className="text-center font-semibold">
        {cuisines.join(", ")} • {costForTwo}
      </p>
      <p className="text-center text-gray-600">
        {locality}, {areaName}
      </p>

      {/* Menu */}
      <h2 className="mt-8 text-2xl font-bold">Menu</h2>

      {menuItems.map((category, index) => {
        const isOpen = index === showIndex;

        return (
          <div key={category.card.card.title} className="mt-4 ">
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center p-4 cursor-pointer border border-gray-400 rounded-2xl shadow-lg bg-gray-200"
              onClick={() => setShowIndex(isOpen ? null : index)}
            >
              <h3 className="font-bold text-lg">{category.card.card.title}</h3>
              <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
            </div>

            {/* Accordion Body */}
            {isOpen && (
              <div className="p-4 bg-white relative">
                {category.card.card.itemCards.map((item) => (
                  <div
                    key={item.card.info.id}
                    className="flex justify-between py-2 border-b last:border-b-0"
                  >
                    <span>{item.card.info.name}</span>
                    <span className="font-semibold">
                      ₹
                      {(item.card.info.price || item.card.info.defaultPrice) /
                        100}
                    </span>

                    <div className="w-3/12 p-4 relative">
                      {/* Add Button */}
                      <button
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 
                     bg-yellow-400 px-4 py-1 rounded-lg shadow-lg font-semibold"
                      >
                        Add +
                      </button>

                      {/* Image */}
                      <img
                        src={CDN_URL + item.card.info.imageId}
                        className="w-full rounded-lg"
                        alt={item.card.info.name}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
