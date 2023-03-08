import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import Login from './components/Login';
import LineChart from './components/LineChart';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from './components/DoughnutChart';
import SummaryData from './components/SummaryData';

function App() {
  
  return (
    <div Name="App">
      
      {/* <BarChart/> */}
      <Routes> 
        <Route path = 'production' element={<SummaryData/>}>
          
        </Route>
        <Route path = 'login' element = {<Login/>}/>
      </Routes>  
        
    </div>
  );
}

export default App;
