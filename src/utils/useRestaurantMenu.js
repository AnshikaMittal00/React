import {useEffect,useState} from "react";
import { Menu_URL } from "../utils/constants";
const useRestaurantMenu=(resId)=>{
    const [menuInfo,setmenuInfo]=useState(null);
    const [allItems,setallItems]=useState(null);
    const [categories,setcategories]=useState("");
 useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(Menu_URL + resId);
        const json = await data.json();
        const cards = json?.data?.cards;
        setmenuInfo(cards);
        const items = cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards || [];
        setallItems(items);
       const c=cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"].includes("ItemCategory"));
       setcategories(c);
        //  console.log(c);
    };
    return [menuInfo,allItems,categories];
}
export default useRestaurantMenu;
