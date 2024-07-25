import { RESTAURANT_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    costForTwo,
  } = restaurant?.info;
  return (
    <div>
      <div className="">
        <img
          className="max-h-[300px] min-h-[300px] w-full"
          src={`${RESTAURANT_BASE_URL}${cloudinaryImageId}`}
        ></img>
      </div>
      <h2 className="font-bold mt-2 text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
