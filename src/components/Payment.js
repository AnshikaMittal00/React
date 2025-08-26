import React, { useState } from "react";

// Helper component for the radio button options
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
  // State to control the visibility of the payment options
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectMethod = (method) => {
    setPaymentMethod(method);
    setShowOptions(false); // Hide options after selection
  };

  return (
    <div className=" px-1">
        <div className="my-3 p-4  rounded-md bg-gray-50 shadow-md w-full  ">
      {/* This is the main button that is always visible */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="w-full flex justify-between items-center p-2 rounded-lg bg-pink-100 hover:bg-pink-200 transition-colors"
      >
        <h2 className="font-semibold text-md text-pink-600">
          {paymentMethod === "" ? "Select Payment Method" : paymentMethod}
        </h2>
        {/* Chevron icon that rotates based on state */}
        <svg 
          className={`w-6 h-6 text-pink-600 transition-transform duration-300 ${showOptions ? 'transform rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* This div contains the options and is shown/hidden based on state */}
      {showOptions && (
        <div className="mt-3 border-t pt-3 space-y-2">
          <PaymentOption
            value="Cash On Delivery"
            checked={paymentMethod === "Cash On Delivery"}
            onChange={handleSelectMethod}
          >
            Cash On Delivery
          </PaymentOption>
          
          <PaymentOption
            value="Stripe"
            checked={paymentMethod === "Stripe"}
            onChange={handleSelectMethod}
          >
            Stripe
          </PaymentOption>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default Payment;
