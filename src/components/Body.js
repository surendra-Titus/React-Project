import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import emptySearchResult from "../assets/empty-search-results.png";

const fillterData = (query, arr) => {
  if (query === "") {
    return arr;
  } else {
    return arr.filter((list) =>
      list.data.name.toLowerCase().includes(query.toLowerCase())
    );
  }
};

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    getResaurants();
  }, []);

  const getResaurants = async () => {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await response.json();
    setAllRestaurants(data?.data?.cards[2].data?.data?.cards);
    setfilteredRestaurants(data?.data?.cards[2].data?.data?.cards);
  };

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container flex p-3">
        <input
          type="text"
          placeholder="Feeling hungry.."
          className="search-field border border-zinc-800"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="search-btn border border-violet-700 "
          onClick={() => {
            const data = fillterData(searchInput, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <img
            className="m-auto"
            alt="No Restaurants found"
            src={emptySearchResult}
          />
        ) : (
          filteredRestaurants.map((rest) => (
            <RestaurantCard key={rest.data.id} data={rest.data} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
