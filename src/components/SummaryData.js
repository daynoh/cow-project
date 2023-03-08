import React, {useState} from 'react'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import LineChart from './LineChart'
function SummaryData() {
    const [milkData, setMilkData] = useState({
        labels: ["january", "Feb", "March","April","May"],
        datasets:[
          {
            label : "Milk Production",
            data:[60,50,100,120,180],
            borderColor:"black",
            borderWidth: 2
    
          }
        ]
      })
      // Expenditure data
      const [expenditure, setExpenditure] = useState({
        labels: ["january", "Feb", "March","April","May"],
        datasets:[
          {
            label : "Expenditure",
            data:[60,50,100,120,180],
            borderColor:"black",
            borderWidth: 2
    
          }
        ]
      })
    
      // Expenditure breakDown
      const [expenses, setExpenses] = useState({
        labels: [
          'Workers',
          'Feeds',
          'Electricity',
          'Transport'
        ],
        datasets: [{
          label: 'Expenses',
          data: [100, 50, 100,30],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 30)',
            'rgb(100, 1, 100)'
          ],
          hoverOffset: 4
        }]
      })
  return (
    <div className='summaryData' >
        <div className="chart bar">
            <BarChart chartData={milkData}></BarChart>
        </div>
        <div className="chart line">
            <LineChart chartData={expenditure}></LineChart>
        </div>
        <div className="chart doughnut">
            <DoughnutChart chartData={expenses}></DoughnutChart>
        </div>
        
        <div>
            <h1>Total Profit </h1>
            <div className="profit">
                2100
            </div>
        </div>
    </div>
  )
}

export default SummaryData
