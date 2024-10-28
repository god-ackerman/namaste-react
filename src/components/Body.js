import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //useEffect => (setup function, optional dependencies)
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    //console.log(json);
    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(useOnlineStatus() === false) {
    return(
      <div>
        <h1>Looks like you are offline!!</h1>
        <h2> Please check your internet connection!</h2>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between p-4">
        <div className="search">
          <input
            className="search-bar px-2 mx-2 border border-solid border-black rounded-md w-60"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button px-4 py-1 mx-2 bg-gray-300 rounded-md"
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
            className="show-all-btn px-2 py-1 mx-2 bg-gray-300 rounded-md"
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            Show All
          </button>
        </div>
        <button
          className="filter-btn px-2 py-1 mx-2 bg-gray-300 rounded-md"
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
      <div className="restaurant-container flex flex-wrap">
        {/* We need to use functional components for reusability  */}
        {filteredRestaurants.map((res) => (
          <Link key={res?.info.id} to={"/restaurants/" + res?.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
