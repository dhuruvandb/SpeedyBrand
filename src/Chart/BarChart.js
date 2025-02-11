import { Bar } from "react-chartjs-2";
import Data from "../Data/SampleData.json";
import Chart from "chart.js/auto";

const BarChart = () => {
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
        text: "Top 5 Streamed Songs",
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

  const labels1 = Data.topStreamedSongs.map((_) => _.songName);

  const data = {
    labels: labels1,
    datasets: [
      {
        label: "No of streams",
        data: Data.topStreamedSongs.map((data) => data.streams),
        borderColor: "rgb(117, 235, 53)",
        backgroundColor: "rgba(53, 235, 80, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;