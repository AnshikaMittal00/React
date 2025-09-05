
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <p className="text-gray-700 mb-6">
        Oops! Something went wrong. Your payment could not be completed.
      </p>
      <Link
        to="/cart"
        className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
      >
        Return to Cart
      </Link>
    </div>
  );
};

export default PaymentFailed;
