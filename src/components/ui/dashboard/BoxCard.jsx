import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BoxCard = () => {
  const data = {
    labels: ["Foreign Users", "Local Users", "Industry Company"],
    datasets: [
      {
        data: [79, 11, 10],
        backgroundColor: ["#22c55e", "#3b82f6", "#f97316"],
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
  };

  return (
    <div className="bg-background px-6 py-5  transition">
      {/* Header */}
      <p className="text-sm font-medium text-muted-foreground">Total Sales</p>

      <div className="flex items-center justify-between mt-2">
        <h3 className="text-3xl font-bold text-text">1,234</h3>
        <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
          +0.8%
        </span>
      </div>

      {/* Chart */}
      <div className="relative w-2/6 mt-4">
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-4 space-y-2">
        {/* Foreign */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-text  font-medium">Foreign Users</span>
          </div>
          <span className="font-semibold">79%</span>
        </div>

        {/* Local */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            <span className="text-text font-medium">Local Users</span>
          </div>
          <span className="font-semibold">11%</span>
        </div>

        {/* Industry */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="text-text font-medium">Industry Company</span>
          </div>
          <span className="font-semibold">10%</span>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-4 text-xs text-muted-foreground">
        Compared to last month
      </p>
    </div>
  );
};

export default BoxCard;
