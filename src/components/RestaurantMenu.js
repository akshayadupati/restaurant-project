import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Error from "./Error";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import CategoryAccordion from "./CategoryAccordion";
import { useState } from "react";

const RestaurantMenu = () => {
  const [recommendedIndex, setRecommendedIndex] = useState(null);
  const { id } = useParams();
  const restaurantData = useRestaurantMenu(id);

  if (restaurantData === null) return <Shimmer />;

  if (!restaurantData || !restaurantData.cards) return <Error />;
  const { name, costForTwoMessage, cuisines } =
    restaurantData?.cards[2]?.card?.card?.info;

  const categories =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (eachCard) =>
        eachCard?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <p className="text-2xl my-6 font-bold">{name}</p>
      <p className="text-md my-6 font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((eachCategory, index) => (
        <CategoryAccordion
          category={eachCategory}
          show={recommendedIndex === index}
          handleClick={() => setRecommendedIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
