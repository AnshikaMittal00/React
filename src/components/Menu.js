import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
const Menu = () => {
  const [menuInfo, setmenuInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.458432000000034&lng=77.69292799999998&restaurantId=36688&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data);
    setmenuInfo(json?.data?.cards);
  };
  if (menuInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = menuInfo[2]?.card?.card?.info;
//   const {itemcards}=menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemcards;
//   console.log(itemcards[0].info);


  return(
    <div className="menu">
    <h1>{name}</h1>
    <h3>{cuisines.join(",")}</h3>
    <h3>{costForTwoMessage}</h3>
    <ul>
      <li>Burgers</li>
      <li>Chowmine</li>
      <li>Diet Coke</li>
    </ul>
  </div>
  );
  
};
export default Menu;
