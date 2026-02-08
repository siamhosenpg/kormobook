import React from "react";

const CountingCard = () => {
  return (
    <div className="px-6 py-4 bg-background">
      <h5 className="text-sm font-medium text-text">Total Sales</h5>
      <strong className="mt-1 block text-4xl font-bold text-text py-3">
        1234
      </strong>

      <div className="mt-1 text-sm font-medium text-green-500">
        0.8% <span className="text-gray-500">from last month</span>
      </div>
    </div>
  );
};

export default CountingCard;
