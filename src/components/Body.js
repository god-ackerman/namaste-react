import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4.4
            );
            setListofRestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {/* We need to use functional components for reusability  */}
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res?.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;