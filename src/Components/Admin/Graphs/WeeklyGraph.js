import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
import faker from "faker"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart"
    // }
  }
}

const labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]

export const data = {
  labels,
  datasets: [
    {
      label: "Users",
      data: [0,44,55,6,55,22,44,33,78],
      borderColor: '#6C72FF',
      backgroundColor: 'rgba(3, 152, 252,40%)',
    },
    
  ]
}

export default function WeeklyGraph() {
  return <Line options={options} data={data} />
}
