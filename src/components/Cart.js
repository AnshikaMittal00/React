import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";
import BillSummary from "./BillSummary";
import Address from "./Address.js";
import { Link } from "react-router-dom";
import Payment from "./Payment.js";
const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleCart=()=>{
     dispatch(clearCart());
    }
 return(
      <div className="m-4 p-4 flex justify-center">
 
      
      {/* Removed `m-auto` to align this container to the left */}
      <div className="max-w-2xl">
             <h1 className="text-2xl text-center font-bold text-pink-600 mb-4">Cart</h1>
        {cartItems.length === 0 && (
          <h1 className="m-2 text-pink-400">
            Your Cart is empty!! Please add something to fill your cart!!
          </h1>
        )}

      
        {cartItems.length !== 0 && <ItemList items={cartItems} />}

        {cartItems.length !== 0 && (
          // This div contains the summary, address, and clear button
          <div>
             <Address />
    
             <Payment/>
           
            <div className="flex my-4 mx-2 space-x-2 items-center">
                 <button 
              className="p-2 my-2 w-40 flex justify-center items-center font-sans hover:bg-pink-800 hover:text-white font-semibold rounded-lg bg-pink-600 text-white transition-colors" 
              onClick={handleCart}
            >
              Clear Cart
            </button>
           
           
            </div>
           
          </div>
        )}
      </div>
    </div>
    
   
 )
}
export default Cart;