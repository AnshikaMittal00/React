import { useState } from "react";
import NestedCategory from "./NestedCategory";
import ItemList from "./ItemList";
import {MenuShimmer} from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantCategory=({data,showItems,showIndex})=>{
  const {resId}=useParams();
  const [menuInfo]=useRestaurantMenu(resId);
  if (!menuInfo || menuInfo.length === 0) {
    return <MenuShimmer/>; 
  }
  const {sla}=menuInfo[2]?.card?.card?.info;
    const handleClick = () => {
        showIndex();
    };
     return(
        <div>
        <div className="w-[90%] mx-auto my-4  bg-gray-50 shadow-lg p-4 "  >
            <div className="flex justify-between" onClick={handleClick}>
                 <span>{data.title}({data?.itemCards?.length||data?.categories?.length})</span>
             <span className="cursor-pointer">{showItems ? '🔼' : '🔽'}</span>
              </div>
        
            <div>
                {showItems&&data.itemCards&&( <ItemList items={data.itemCards} sla={sla} resId={resId}/>)}
            </div>
            
           
           
            
        </div>
       
           {showItems && data.categories && (
                <div className="w-[90%] mx-auto">
                    {data.categories.map((nested) => (
                       
                        <NestedCategory key={nested.categoryId} data={nested} />
                    ))}
                </div>
            )}
           
           
       
        </div>
         

    )
}
   
export default  RestaurantCategory;