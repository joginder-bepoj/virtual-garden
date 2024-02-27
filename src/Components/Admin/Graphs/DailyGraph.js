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

const labels = ["01:00", "02:00", "03:00","04:00", "05:00", "06:00", "07:00","08:00", "09:00", "10:00","11:00", "12:00", "13:00", "14:00","15:00", "16:00", "17:00","18:00", "19:00", "20:00", "21:00","22:00", "23:00","24:00"]

export const data = {
  labels,
  datasets: [
    {
      label: "Users",
      data: [0,44,55,6,55,22,44,33,78,33,45,67,43,66,78,90,33,55,45,75,7,7,6,66],
      borderColor: '#6C72FF',
      backgroundColor: 'rgba(3, 152, 252,40%)',
    },
    
  ]
}

export default function DailyGraph() {
  return <Line options={options} data={data} />
}
