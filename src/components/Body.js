import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect Bodyyy rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const results = await data.json();
    setListOfRestaurants(
      results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log("Bodyyy rendered", listOfRestaurants);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="filter-btn"
            onClick={() => {
              searchText === ""
                ? setFilteredRestaurants(listOfRestaurants)
                : setFilteredRestaurants(
                    listOfRestaurants.filter((restaurant) =>
                      restaurant.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                  );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(
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
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
