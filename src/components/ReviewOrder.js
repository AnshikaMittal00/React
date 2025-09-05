import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import BillSummary from "./BillSummary";
import { Link } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51S0qJtCPENAtPfIIyOx4WatEvwsjzeQ1UUQvNKUX9wAmOdX5rqacvhTy9GrqjqLawuR6gTrGZlASlamJXAymcsyL00OhcAHTfc");

const ReviewOrder = () => {
  const { state } = useLocation();
  const { paymentMethod, totalAmount } = state || {};
  const [loading, setLoading] = useState(false);

  if (!paymentMethod || !totalAmount) {
    return <p className="text-center text-red-600">No order details found. Please go back.</p>;
  }



  const handleStripePay = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }),
      });

      if (!response.ok) throw new Error("Failed to create Stripe session");

      const session = await response.json();
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (err) {
      console.error("Payment failed:", err);
      alert("Payment failed. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="my-6 p-6 rounded-lg bg-white shadow-lg max-w-md mx-auto">
     <BillSummary   total={totalAmount}/>

      {paymentMethod === "Cash On Delivery" ? (
        <Link to="/order">
         <button
          className="w-full py-3 px-4 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
        >
          Place Order
        </button></Link>
       
      ) : (
        <button
          onClick={handleStripePay}
          disabled={loading}
          className="w-full py-3 px-4 font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Processing..." : "Proceed to Pay"}
        </button>
      )}
    </div>
  );
};

export default ReviewOrder;
