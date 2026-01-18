import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/logo-design-restaurant-food-company_1253202-38339.jpg?semt=ais_hybrid&w=740&q=80" />
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
    )
}

// const styleCard={   //inline css
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCard = (props)=>{
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}> 
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/22/228265d3-6086-4c01-953c-a519e92569eb_image12c7f3f0e659ea4ea6878aa23761f42249.JPG" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 min</h4>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, North Indian, Asian"  />
                <RestaurantCard resName="KFC"  cuisine="Burger, Fast Food" />
            </div>
        </div>
    )
}


const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); // same <HeadingComponent> <HeadingComponent /> 
