import { LOGO_URL } from "../utils/constants";
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [btn, setBtn] = useState("Login");
    const [isOpen, setIsOpen] = useState(false);
     const {username,photoUrl}=useSelector((store)=>store.user);
     const cart=useSelector((store)=>store.cart.items);
    return (
        <header className="bg-pink-100 text-black p-4">
            <div className="container mx-auto flex justify-between items-center relative">
                <img className="rounded-full object-cover w-20 mx-2  border-8 border-white shadow-xl" src={LOGO_URL} alt="Logo" />

                
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden  cursor-pointer z-20"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

             
                <ul className="hidden md:flex md:items-center space-x-4">
                    <li><p>Online Status:{onlineStatus ? "🟢" : "🔴"}</p></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart({cart.length})</Link></li>
                    {btn==="Logout" &&(
                        <li className="flex">
                           {photoUrl&& <img src={photoUrl} alt="photo" className="inline-block ml-1 h-6 w-6 rounded-full"></img>}
                         {username&& <h1 className="px-2">{username.split(" ")[0]}</h1>
         }   
                      </li> 
                    )} 
                    <li>
                      <Link to="/login">
                      <button
                            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                btn === "Login" ? setBtn("Logout") : setBtn("Login");
                            }}>
                            {btn}
                        </button>
                        </Link>  
                    </li>
                </ul>

               
                {isOpen && (
                    <ul className="absolute flex flex-col  top-full right-0 z-10 w-40 bg-pink-100 p-4 rounded-b-lg shadow-md md:hidden space-y-2">
                        <li><p>Online Status:{onlineStatus ? "🟢" : "🔴"}</p></li>
                        <li><Link to="/" onClick={() => setIsOpen(false)} >Home</Link></li>
                        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                        <li><Link to="/grocery" onClick={() => setIsOpen(false)}>Grocery</Link></li>
                        <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart({cart.length})</Link></li>
                        <li onClick={() => setIsOpen(false)} className="flex">
                           {photoUrl&& <img src={photoUrl} alt="photo" className="inline-block ml-1 h-6 w-6 rounded-full"></img>}
                          {username&&(<h1 className="px-2">{username.split(" ")[0]}</h1>
                        )} 
                        </li>
                        <li>
                            <Link to="/login">
                            <button
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                    btn === "Login" ? setBtn("Logout") : setBtn("Login");
                                }}>
                                {btn}
                            </button></Link>
                            
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;