import React from "react";
import ReactDOM from "react-dom/client";

/**Layout for a food ordering app:
 *    Header
 *      - Logo
 *      - Nav Items
 *    Body
 *      - Search
 *      - Restaurant container
 *        - Restaurant card
 *          - Image
 *          - Restaurant name, ratings, cuisines, delivery time
 *    Footer
 *      - Copyright
 *      - Links
 *      - Address
 *      - Contact us
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-red-chilli-food-logo-design-your-company-png-image_5263986.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const {resData} = props;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/1/2601361/51f85c677ba604d8d5145b508bc2e337_o2_featured_v2.jpg"
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(" , ")}</h4>
      <h4>{resData.data.avgRating} ⭐</h4>
      <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
      <h4>⏱️: {resData.data.deliveryTime} minutes</h4>
    </div>
  );
};

const resObj = {
  type: "restaurant",
  data: {
    name: "Sagar gaire",
    cuisines: ["North Indian", "Chinese", "South Indian", "Biryani"],
    avgRating: "4.5",
    costForTwo: "35000",
    deliveryTime: "25",
  },
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {/* We need to use functional components for reusability  */}
        <RestaurantCard resData={resObj}/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
