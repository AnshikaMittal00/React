import { useSelector } from "react-redux"

const BillSummary=({total})=>{
    const cartItems=useSelector((store)=>store.cart.items);
  
    
    return(
       <div className=" m-2 font-sans shadow-md">
 
      <div className=" mx-auto bg-gray-50 rounded-xl  p-6">

       
          <div>
            <h1 className="text-l font-semibold text-left text-pink-600 mb-4 border-b pb-2">
              Order Summary
            </h1>

            <table className="w-full text-left">
         
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 font-semibold">Product</th>
                  <th className="p-3 font-semibold  text-center">Quantity</th>
                  <th className="p-3 font-semibold text-right">Price</th>
                  <th className="p-3 font-semibold text-right">Subtotal</th>
                </tr>
              </thead>

              <tbody>

                {cartItems.map((item, index) => (
                  <tr key={index} className="border-b border-b-pink-600">
                  
                    <td className="p-3 ">{item?.card?.info?.name || 'N/A'}</td>
                 
                    <td className="p-3 text-center">{item.count}</td>
                 
                    <td className="p-3 text-right">
                     ₹{((item?.card?.info?.defaultPrice || 0) / 100).toFixed(2)}
                    </td>
                   
                    <td className="p-3 text-right ">
                       ₹{(((item?.card?.info?.defaultPrice || 0) / 100) * item.count).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
        
              <tfoot>
                <tr className="font-semibold">
                  <td colSpan="3" className="p-3 text-right text-pink-600 text-md">Total Price</td>
    
                  <td className="p-3 text-right text-md  text-pink-600">
                     ₹{ total/100}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        
      </div>
    </div>
    )
}
export default BillSummary;