import React, { useState, useEffect } from 'react';
import UseAnimatedCheckmark from '../utils/useAnimatedCheckMark';
import { useSelector } from 'react-redux';

const OrderPlaced = () => {
  const [visible, setVisible] = useState(false);
  const cartRestaurant=useSelector((store)=>store.cart.Restaurant);
   
 
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer); 
})

  return (
    <div className="flex  justify-center mt-[20%]  md:mt-[10%] font-sans">
      <div 
        className={`
          p-8 rounded-2xl shadow-2xl text-center
          transition-all duration-700 ease-out  bg-pink-100 
          ${visible ? 'transform scale-100 opacity-100' : 'transform scale-90 opacity-0'}
        `}
      >
        <div className="flex justify-center mb-4">
          <UseAnimatedCheckmark />
        </div>
        <h1 
          className={`
            text-3xl font-bold text-pink-600 mb-2
            transition-opacity duration-500 delay-1000
            ${visible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          Order Placed!
        </h1>
        <p 
          className={`
            text-gray-600
            transition-opacity duration-500 delay-1200
            ${visible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          Thank you for your purchase.Your order will be delivered in {cartRestaurant.deliveryTime} minutes
        </p>
      </div>
    </div>
  );
};

export default OrderPlaced;
