import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const PaymentOption = ({ value, checked, onChange, children }) => (
  <label className="flex items-center cursor-pointer p-3 rounded-lg hover:bg-pink-50 transition-colors">
    <input
      type="radio"
      name="payment"
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      className="w-5 h-5 mr-4 text-pink-600 focus:ring-pink-500 border-gray-300"
    />
    <span className="text-gray-800 font-medium">{children}</span>
  </label>
);

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showOptions, setShowOptions] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();


    const totalAmount=()=>{
        return cartItems.reduce((total,item)=>{
          const price=(item?.card?.info?.defaultPrice || 0);
          const count=item.count;
          return total+(price*count) ;
        },0);}
  const handleContinue = () => {
    if (!paymentMethod) {
      alert("Please select a payment method first.");
      return;
    }
  
    navigate("/checkout", { state: { paymentMethod, totalAmount: totalAmount() } });
  };

  return (
    <div className="my-6 p-4 rounded-lg bg-white shadow-md w-full  mx-auto">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="w-full flex justify-between items-center p-3 rounded-lg bg-pink-100 hover:bg-pink-800 transition-colors"
      >
        <h2 className="font-semibold text-md text-pink-600">
          {paymentMethod === "" ? "Select Payment Method" : `Selected: ${paymentMethod}`}
        </h2>
        <svg
          className={`w-6 h-6 text-pink-600 transition-transform duration-300 ${showOptions ? "transform rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {showOptions && (
        <div className="mt-3 border-t pt-3 space-y-2">
          <PaymentOption
            value="Cash On Delivery"
            checked={paymentMethod === "Cash On Delivery"}
            onChange={setPaymentMethod}
          >
            Cash On Delivery
          </PaymentOption>
          <PaymentOption
            value="Stripe"
            checked={paymentMethod === "Stripe"}
            onChange={setPaymentMethod}
          >
            Stripe
          </PaymentOption>
        </div>
      )}

      {paymentMethod && (
        <div className="mt-6 border-t pt-4">
          <button
            onClick={handleContinue}
            className="w-full py-3 px-4 font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
