import React from 'react'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import {Chart as chartjs} from 'chart.js/auto'
const BarChart = ({chartData}) => {
    
  return (
    <div>
      <Bar data = {chartData}/>


      
      <p>Bar chart </p>
    </div>
  )
}

export default BarChart
