import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { slaString } = resData?.info?.sla;         //delivery time
  return (
    <div className="restaurant-card m-4 p-4 w-[200px] h-[400px] rounded-lg bg-gray-100">
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
