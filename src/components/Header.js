import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const onlineStatus=useOnlineStatus()
   const [btn,setBtn]=useState("Login");
    return(
    <div className="header">
       <div className="logo-container">
        <img className="logo"src={LOGO_URL}/>
        <h4><i>BiteRun</i></h4>
        </div>
    <div className="nav-items">
        <ul>
            <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About Us</Link></li>
            <li><Link to="/contact" className="link">Contact Us</Link></li>
            <li><Link to="/grocery" className="link">Grocery</Link></li>

            <li>Cart</li>
            <button className="login" 
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
