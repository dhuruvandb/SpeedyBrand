import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Data from "../Data/SampleData.json";

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "Streamify User growth",
        color: "#fff",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#444",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#444",
        },
      },
    },
  };

  const labels = Data.userGrowthChart.map((_) => _.month);

  const data = {
    labels,
    datasets: [
      {
        label: "No of Active Users",
        data: Data.userGrowthChart.map((data) => data.activeUsers),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
