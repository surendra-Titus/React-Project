import { useParams } from "react-router-dom";
import { MENU_URL } from "../constants";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getRestaurnatMenu();
  }, []);

  const getRestaurnatMenu = async () => {
    const response = await fetch(MENU_URL + id);
    const data = await response.json();
    setMenu(data);
  };

  return (
    <div>
      <span>{id}</span>
      <img src={IMG_CDN_URL + menu?.data?.cloudinaryImageId} />
    </div>
  );
};
export default RestaurantMenu;
