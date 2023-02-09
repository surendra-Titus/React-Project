import { useState } from "react";
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="search-container flex">
        <input
          type="text"
          placeholder="Search.."
          className="search-field border border-zinc-800"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button className="search-btn border border-violet-700 ">Search</button>
      </div>
    </>
  );
};

export default Body;
