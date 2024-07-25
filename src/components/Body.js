import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import RestaurantCard, { withRestaurantOpen } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(listOfRestaurants);
  useEffect(() => {
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

  const onlineStatus = useOnlineStatus();
  const RestaurantIsOpen = withRestaurantOpen(RestaurantCard);

  if (onlineStatus === false)
    return (
      <h1>Your internet seems to be disconnected. Please try again later...</h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex m-4">
        <div className="search-container">
          <input
            className="border border-black border-solid"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="mx-4 p-2 bg-black text-white rounded-lg"
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
          className="p-2 bg-black text-white rounded-lg"
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
      <div className="grid grid-cols-5 m-2">
        {filteredRestaurants.map((restaurant) => (
          <div className="m-1 p-2 bg-gray-100 rounded-lg hover:bg-gray-400">
            <Link
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
              className="custom-link"
            >
              {restaurant.info.isOpen ? (
                <RestaurantIsOpen restaurant={restaurant} />
              ) : (
                <RestaurantCard restaurant={restaurant} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
