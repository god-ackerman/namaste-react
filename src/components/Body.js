import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
          {/* We need to use functional components for reusability  */}
          {resList.map((res) => (
            <RestaurantCard key={res?.info.id} resData={res} />
          ))}
        </div>
      </div>
    );
  };

export default Body;