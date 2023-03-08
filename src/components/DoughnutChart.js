import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart as chartjs} from 'chart.js/auto'

function DoughnutChart({chartData}) {
  return (
    <div>
      <Doughnut data={chartData}></Doughnut>
    </div>
  )
}

export default DoughnutChart
