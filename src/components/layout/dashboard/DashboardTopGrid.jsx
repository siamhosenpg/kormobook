import React from "react";
import CountingCard from "../../ui/dashboard/CountingCard";
import BoxCard from "../../ui/dashboard/BoxCard";

const DashboardTopGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <CountingCard />
        <CountingCard />
        <CountingCard />
        <CountingCard />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <BoxCard />
        <BoxCard />
      </div>
    </div>
  );
};

export default DashboardTopGrid;
