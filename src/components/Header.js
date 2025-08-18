import { LOGO_URL } from "../utils/constants";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [btn, setBtn] = useState("Login");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-pink-100 text-black p-4">
            <div className="container mx-auto flex justify-between items-center relative">
                <img className="w-20" src={LOGO_URL} alt="Logo" />

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden  cursor-pointer z-20"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex md:items-center space-x-4">
                    <li><p>Online Status:{onlineStatus ? "🟢" : "🔴"}</p></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li>
                        <button
                            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                btn === "Login" ? setBtn("Logout") : setBtn("Login");
                            }}>
                            {btn}
                        </button>
                    </li>
                </ul>

                {/* Mobile Dropdown Menu (Conditionally rendered) */}
                {isOpen && (
                    <ul className="absolute flex flex-col  top-full right-0 z-10 w-40 bg-pink-100 p-4 rounded-b-lg shadow-md md:hidden space-y-2">
                        <li><p>Online Status:{onlineStatus ? "🟢" : "🔴"}</p></li>
                        <li><Link to="/" onClick={() => setIsOpen(false)} >Home</Link></li>
                        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                        <li><Link to="/grocery" onClick={() => setIsOpen(false)}>Grocery</Link></li>
                        <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
                        <li>
                            <button
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                    btn === "Login" ? setBtn("Logout") : setBtn("Login");
                                }}>
                                {btn}
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;