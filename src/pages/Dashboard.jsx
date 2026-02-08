import React from "react";
import DashboardTopGrid from "../components/layout/dashboard/DashboardTopGrid";
import DashboardSecond from "../components/layout/dashboard/DashboardSecond";

const Dashboard = () => {
  return (
    <div className="Pagearea Toparea flex flex-col gap-4">
      <DashboardTopGrid />
      <DashboardSecond />
    </div>
  );
};

export default Dashboard;
