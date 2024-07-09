import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_DATA } from "../utils/mockData.js";

const Body = () => {
    return (
      <div className="body-container">
        <div className="search-container"> Search Bar</div>
        <div className="restaurant-container">
          {RESTAURANT_DATA .map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    );
  };


export default Body;