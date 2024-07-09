import { RESTAURANT_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurant } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = restaurant?.info;
    return (
      <div className="restaurant-card-container">
        <div className="restaurant-image-container">
          <img
            className="restaurant-image"
            src={`${RESTAURANT_BASE_URL}${cloudinaryImageId}`}
          ></img>
        </div>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };


export default RestaurantCard;