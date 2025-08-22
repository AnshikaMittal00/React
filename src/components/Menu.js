import { useState } from "react";
import Shimmer from "./shimmer";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantCategory from "../utils/useRestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Menu = () => {
  const { resId } = useParams();
  const [menuInfo, allItems,categories] = useRestaurantMenu(resId);
  const[showItems,setshowItems]=useState(null);
  const [filteredList, filters, handleFilterClick] =
    useRestaurantCategory(allItems);
  while (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = menuInfo[2]?.card?.card?.info;
 
  return (
    <div className="">
      <div className="text-center">
        <h1 className="font-bold my-5 text-2xl text-pink-700">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(",")}</p>
        <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
        {categories.map((c,index)=><RestaurantCategory key={c?.card?.card?.categoryId} 
        data={c?.card?.card}
        showItems={index===showItems?true:false}
        showIndex={()=>setshowItems(index===showItems?null:index)}

        />)}
      <Link to="/cart">
      <div className="w-[90%] mx-auto my-4  bg-pink-100 shadow-lg  p-4 font-semibold hover:bg-pink-600 active:g-pink-800" >
         <h1>view your cart</h1> 
        </div>
      </Link>  
      </div>

      {/* <div className="category">
        <button
          className={`button ${filters.isVeg ? "veg" : ""}`}
          onClick={() => handleFilterClick("isVeg")}
        >
          Veg
        </button>
        <button
          className={`button ${filters.isNonveg ? "non-veg" : ""}`}
          onClick={() => handleFilterClick("isNonveg")}
        >
          Non-Veg
        </button>
        <button
          className={`button ${filters.isBestseller ? "Bestseller" : ""}`}
          onClick={() => handleFilterClick("isBestseller")}
        >
          Bestseller
        </button>
      </div> */}
     
    </div>
  );
};

export default Menu;
