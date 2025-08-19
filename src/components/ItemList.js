import { IMG_URL } from "../utils/constants";
const ItemList=({items,type})=>{
    // console.log(item);
   
    return(
        
       <div>
        {type==="notNested"&&(
            <ul>
            {items.map((item)=>
            <div  key={item.card.info.id} className="p-2 m-2 border-b border-gray-400 flex justify-between items-center ">
             <div className="w-24 h-24 flex-shrink-0" >
                    <img className="w-full h-full object-cover rounded-md" src={`${IMG_URL}/${item.card.info.imageId}`}alt={item.card.info.name} />
            </div>
            <div className=" flex-1 p-4  ">
                
                
              <h3 className="text-lg font-bold text-left">{item.card.info.name}</h3>
              <p className="text-gray-600 text-sm mt-1 text-left overflow-wrap break-words">{item.card.info.description}</p> 
            <h3  className="font-bold text-md text-left mt-2">Rs.{item.card.info.defaultPrice/100}</h3>
            

            
            </div>
            </div>
            
            
        )}
        </ul>
        )}
        {
            type==="nested"&&(
                 <ul>
            {items.map((item)=>
            <div  key={item.card.info.id} className="p-2 m-2 border-b border-gray-400 flex justify-between items-center ">
             <div className="w-24 h-24 flex-shrink-0" >
                    <img className="w-full h-full object-cover rounded-md" src={`${IMG_URL}/${item.card.info.imageId}`}alt={item.card.info.name} />
            </div>
            <div className=" flex-1 p-4  ">
                
                
              <h3 className="text-lg font-bold text-left">{item.card.info.name}</h3>
              <p className="text-gray-600 text-sm mt-1 text-left overflow-wrap break-words">{item.card.info.description}</p> 
            <h3  className="font-bold text-md text-left mt-2">Rs.{item.card.info.defaultPrice/100}</h3>
            

            
            </div>
            </div>
            
            
        )}
        </ul>
                
            )
        }
        
       </div>

    )

}
export default ItemList;
