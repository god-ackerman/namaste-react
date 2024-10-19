import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { slaString } = resData?.info?.sla;         //delivery time
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>⏱️: {slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
