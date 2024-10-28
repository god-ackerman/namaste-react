import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-red-100">
      <div className="w-40 mx-4 p-6">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className="px-2 mx-1 text-xl font-serif">Online: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-2 mx-1 text-xl font-serif">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 mx-1 text-xl font-serif">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 mx-1 text-xl font-serif">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 mx-1 text-xl font-serif">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 mx-1 text-xl font-serif">Cart</li>
          <button
            className="px-2 mx-1 text-xl font-serif"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log("Button clicked!");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
