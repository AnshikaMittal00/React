import { useState } from "react";
import NestedCategory from "./NestedCategory";
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,showIndex})=>{
    // const [isOpen,setisOpen]=useState(false);
   
    // console.log(data);
    const handleClick = () => {
        showIndex();
    };
    //  const toggle = () => {
    //     setnestedOpen(!nestedOpen); 
    // };
     return(
        <div>
        <div className="w-[90%] mx-auto my-4  bg-gray-50 shadow-lg p-4 "  >
            <div className="flex justify-between" onClick={handleClick}>
                 <span>{data.title}({data?.itemCards?.length||data?.categories?.length})</span>
             <span className="cursor-pointer">{showItems ? '🔼' : '🔽'}</span>
              </div>
        
            <div>
                {showItems&&data.itemCards&&( <ItemList items={data.itemCards}/>)}
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