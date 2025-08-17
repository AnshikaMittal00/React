import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const onlineStatus=useOnlineStatus()
   const [btn,setBtn]=useState("Login");
    return(
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 px-2">
       <div className="logo-container">
        <img className="w-20"src={LOGO_URL}/>
        <h4><i>BiteRun</i></h4>
        </div>
    <div className="flex items-center  ">
        <ul  className="flex flex-col sm:flex-row items-center gap-y-2 md:gap-y-0 md:space-x-4">
            <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
            <li><Link to="/" className="px-4">Home</Link></li>
            <li><Link to="/about" className="px-4">About Us</Link></li>
            <li><Link to="/contact" className="px-4">Contact Us</Link></li>
            <li><Link to="/grocery" className="px-4">Grocery</Link></li>

            <li className="px-4">Cart</li>
            <button className="px-4" 
             onClick={()=>{
              btn==="Login"?setBtn("Logout"):setBtn("Login")
             }}
            >
              {btn}
            </button>
        </ul>

    </div>
    </div>
    );
};
export default Header;
