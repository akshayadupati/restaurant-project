import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useContext } from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import themeContextt from "../Pagination-Interview Prep/ThemeContextt";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { theme, setTheme } = useContext(themeContextt);
  return (
    <div className="flex justify-between items-center bg-purple-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-40 h-32" src={LOGO_URL}></img>
      </div>
      <div className="nav-items-container">
        <ul className="flex m-4">
          <li className="px-2">
            Online Status: {onlineStatus === true ? <>&#x2713;</> : <>&#x2715;</>}
          </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              setTheme("dark");
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
