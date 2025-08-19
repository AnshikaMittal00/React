import { useState } from "react";
import NestedCategory from "./NestedCategory";
import ItemList from "./ItemList";
const RestaurantCategory=({data})=>{
    const [isOpen,setisOpen]=useState(false);
   
    console.log(data);
    const handleClick = () => {
        setisOpen(!isOpen); 
    };
     const toggle = () => {
        setnestedOpen(!nestedOpen); 
    };
     return(
        <div>
        <div className="w-[90%] mx-auto my-4  bg-gray-50 shadow-lg p-4 "  onClick={handleClick}>
            <div className="flex justify-between">
                 <span>{data.title}({data?.itemCards?.length||data?.categories?.length})</span>
             <span>{isOpen ? '🔼' : '🔽'}</span>
              </div>
            <div>
                {isOpen&&data.itemCards&&( <ItemList items={data.itemCards} type={"notNested"}/>)}
            </div>
           
           
            
        </div>
       
           {isOpen && data.categories && (
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