import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //const [filteredVeg, setFilteredVeg] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(itemCards);

  return (
    <div className="menu-page">
      <div className="restaurant-title">
        <h1>{name}</h1>
        <div className="restaurant-details">
          <h2>{cuisines.join(", ")}</h2>
          <h3>
            {costForTwoMessage} - {totalRatingsString}
          </h3>
        </div>
      </div>
      <div className="menu-cards">
        <h1>Menu</h1>
        <div className="filter-buttons">
          <button className="filter-veg">Veg Options Only</button>
          <button className="show-all-btn">Show All</button>
        </div>
        <ul className="restaurant-category">
          {itemCards.map((item) => (
            <li key={item?.card.info.id}>
              {item?.card.info.name} -{" Rs."}
              {item?.card.info.defaultPrice / 100 ||
                item?.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;