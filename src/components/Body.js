import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_DATA } from "../utils/mockData.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_DATA);

  return (
    <div className="body-container">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              )
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
