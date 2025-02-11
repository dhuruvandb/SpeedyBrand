import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const PieChart = () => {
  const data = {
    labels: ["subscriptions", "ads"],
    datasets: [
      {
        label: "Revenue",
        data: [1000000, 500000],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
