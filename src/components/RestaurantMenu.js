import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(
        `${MENU_API}${id}`
      );
      const result = await data.json();
      setRestaurantData(result.data);
      console.log("Result", result.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (restaurantData === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    restaurantData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  console.log(itemCards);
  return (
    <div>
      <h2>{name}</h2>
      <p>{costForTwoMessage}</p>
      <p>{cuisines.join(", ")}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
