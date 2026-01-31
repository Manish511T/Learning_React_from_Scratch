import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btn, setBtn] = useState("Login")
  const onlineStatus = useOnlineStatus();


  return (
    <div className="header flex justify-between shadow-lg bg-green-100/40">
      <div className="logo-container">
        <img
          className="logo w-25 rounded-full"
          src={LOGO_URL}
        /> 
      </div>
      <div className="nav-items flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus?"✅":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button onClick={()=>{btn==="Login"?setBtn("Logout"):setBtn("Login")}} className="login">{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;