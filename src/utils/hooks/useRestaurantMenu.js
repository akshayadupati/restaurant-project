import { useEffect, useState } from "react";
import { MENU_API } from "../constants";

const useRestaurantMenu = (restaurantID) => {
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const data = await fetch(`${MENU_API}${restaurantID}`);
      const result = await data.json();
      setRestaurantData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return restaurantData;
};

export default useRestaurantMenu;
