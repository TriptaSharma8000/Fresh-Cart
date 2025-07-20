import { FaClock, FaGift, FaCube, FaSync } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
      {/* Feature 1 */}
      <div className="flex flex-col items-center md:items-start">
        <FaClock className="text-green-600 text-3xl mb-3 border border-green-600 p-2 rounded-full" />
        <h4 className="text-md font-semibold mb-1">10 minute grocery now</h4>
        <p className="text-gray-600 text-sm">
          Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center md:items-start">
        <FaGift className="text-green-600 text-3xl mb-3 border border-green-600 p-2 rounded-full" />
        <h4 className="text-md font-semibold mb-1">Best Prices & Offers</h4>
        <p className="text-gray-600 text-sm">
          Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center md:items-start">
        <FaCube className="text-green-600 text-3xl mb-3 border border-green-600 p-2 rounded-full" />
        <h4 className="text-md font-semibold mb-1">Wide Assortment</h4>
        <p className="text-gray-600 text-sm">
          Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="flex flex-col items-center md:items-start">
        <FaSync className="text-green-600 text-3xl mb-3 border border-green-600 p-2 rounded-full" />
        <h4 className="text-md font-semibold mb-1">Easy Returns</h4>
        <p className="text-gray-600 text-sm">
          Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
// This code defines a FeaturesSection component that displays four features of a grocery delivery service.
// Each feature is represented by an icon, a title, and a description. The icons are imported from the react-icons library.