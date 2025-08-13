import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";
const Menu = () => {
  const [menuInfo, setmenuInfo] = useState(null);
  const {resId}=useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    
    const data = await fetch( Menu_URL+resId);
    const json = await data.json();
    setmenuInfo(json?.data?.cards);
  };
  if (menuInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = menuInfo[2]?.card?.card?.info;
  const {itemCards}=menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;



  return(
    <div className="menu">
    <h1>{name}</h1>
    <h3>{cuisines.join(",")}</h3>
    <h3>{costForTwoMessage}</h3>
    {itemCards &&itemCards.map(res=>
<ul  key={res.card.info.id}>
      <li>{res.card.info.name} - {"Rs."}{ res.card.info.price/100}</li>
</ul>
    )}
    
 
  </div>
  );
  
};
export default Menu;
