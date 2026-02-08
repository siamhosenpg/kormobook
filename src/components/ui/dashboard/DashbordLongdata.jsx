import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

const DashbordLongdata = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [120, 150, 180, 160, 210, 240, 260, 280, 300, 330, 360, 420],
        tension: 0.45,
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 5,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.15)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 🔥 full width fix
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#09090b",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#71717a" },
      },
      y: {
        grid: { color: "#e5e7eb" },
        ticks: { color: "#71717a" },
      },
    },
  };

  return (
    <div className="w-full bg-background  p-6 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Yearly Revenue
          </p>
          <h3 className="text-2xl font-bold text-text">$42,000</h3>
        </div>

        <span className="text-xs font-semibold text-green-600 bg-green-500/10 px-3 py-1 rounded-full">
          +12.5%
        </span>
      </div>

      {/* Chart */}
      <div className="relative h-[300px] w-full">
        <Line data={data} options={options} />
      </div>

      {/* Footer */}
      <p className="mt-4 text-xs text-muted-foreground">
        Data shown for last 12 months
      </p>
    </div>
  );
};

export default DashbordLongdata;
