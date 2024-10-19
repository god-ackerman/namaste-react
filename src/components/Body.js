import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //useEffect => (setup function, optional dependencies)
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const searchedRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchedRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="show-all-btn"
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            Show All
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4.4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {/* We need to use functional components for reusability  */}
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res?.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
