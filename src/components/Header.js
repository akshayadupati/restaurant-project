import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo-img"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items-container">
          <ul className="nav-items-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Contact Us</li>
            <li className="nav-item">Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;