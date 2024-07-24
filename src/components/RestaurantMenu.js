import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Error from "./Error";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantData = useRestaurantMenu(id);
  if (restaurantData === null) return <Shimmer />;

  if (!restaurantData || !restaurantData.cards) return <Error />;
  const { name, costForTwoMessage, cuisines } =
    restaurantData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  return (
    <div>
      <h2>{name}</h2>
      <p>{costForTwoMessage}</p>
      <p>{cuisines.join(", ")}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
