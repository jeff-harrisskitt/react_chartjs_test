import { useState } from "react";
import { Data } from "./utils/Data";
import { BarChart } from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import './App.css';

Chart.register(CategoryScale);

export default function App() {
  const [chartData] = useState({
    labels: Data.map((data) => data.year),

    datasets: [
      {
        label: "Appointment Attendances ",
        data: Data.map((data) => data.attend),
        backgroundColor: [
          "#00A499",
          "#768692",
          "#00A9CE",
          "#78BE20",
          "#005EB8"
        ],
        borderColor: "black",
        borderWidth: 1
      }
    ]
  });

  return (
    <div className="App">
      <BarChart chartData={chartData} />
      <LineChart chartData={chartData} />
      <PieChart chartData={chartData} />
    </div>
  );
}