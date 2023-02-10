import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data?.data?.cards[2].data?.data?.cards);
      });
  }, []);
  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container flex p-3">
        <input
          type="text"
          placeholder="Feeling hungry.."
          className="search-field border border-zinc-800"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button className="search-btn border border-violet-700 ">Search</button>
      </div>
      <div className="flex flex-wrap">
        {restaurants.map((rest) => (
          <RestaurantCard key={rest.id} data={rest.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
