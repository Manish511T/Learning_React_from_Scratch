import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // let btn = "Login"
  const [btn, setBtn] = useState("Login")
  
  // if no dependency array => useEffect is called on every renders
  // if dependency array is empty => [] useEffect is called on initial render(just once).
  // if dependency  array is [btn] => called everytime btn is updated
  useEffect(()=>{
    console.log("useEffect called")
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        /> 
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button onClick={()=>{btn==="Login"?setBtn("Logout"):setBtn("Login")}} className="login">{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;