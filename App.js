import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/logo-design-restaurant-food-company_1253202-38339.jpg?semt=ais_hybrid&w=740&q=80"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard={   //inline css
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={resData.img} />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.rating}</h4>
      <h4>Rs. {resData.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    id: 1,
    resName: "KFC",
    costForTwo: 40000,
    rating: "4.2",
    cuisines: ["Biryani", "North Indian", "Asian"],
    deliveryTime: "30 mins",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/22/228265d3-6086-4c01-953c-a519e92569eb_image12c7f3f0e659ea4ea6878aa23761f42249.JPG",
  },
  {
    id: 2,
    resName: "Burger King",
    costForTwo: 35000,
    rating: "4.0",
    cuisines: ["Burgers", "Fast Food"],
    deliveryTime: "25 mins",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1663148422/bk8.jpg",
  },
  {
    id: 3,
    resName: "Domino's Pizza",
    costForTwo: 30000,
    rating: "4.1",
    cuisines: ["Pizza", "Italian"],
    deliveryTime: "20 mins",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/10/7915ad77-72fa-4e5e-9626-a0d257db9deb_image2139494ba146524f60a6f74d3856eecaae.JPG",
  }
];

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); // same <HeadingComponent> <HeadingComponent />
