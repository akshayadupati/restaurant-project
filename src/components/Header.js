import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className={"header-container"}>
      {console.log("Header")}
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL}></img>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
