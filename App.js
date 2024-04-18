import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'chart.js/auto';
import { Bar, Line, Pie, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
 function App() {

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const dashboardData = {
    'prospects': 200,
    'scheduled_tours': 120,
    'completed_tours_in_number': 1780,
    'completed_tours_in_percentage': 75,
    'applied_to_lease_applications': 200,
    'completed_applications': 120,
    'tours_during_business_hours_in_percentage': 34,
    'weekend_tours_in_percentage': 40,
    'tours_scheduled_in_day_in_percent': 30,
    'tours_scheduled_in_an_hr_in_percent': 25,
    'total_tours_by_month': {
      'jan': 200,
      'feb': 120,
      'mar': 280
    },
    'total_tours_by_day': {
      'mon': 200,
      'tue': 120,
      'wed': 280,
      'thurs': 200
    },
    'total_tours_by_time': {
      '00': 200,
      '01': 120,
      '02': 280,
      '03': 200,
      '23': 120
    }
  };

  return (
    <>

    <div style={{width:'400px',height:'400px',marginLeft:'500px',display:'flex',justifyContent:'center',marginBottom:'20px',marginTop:'10px'}}>
      <h2>Bar Graph</h2>
      <Bar
        data={{
          labels: Object.keys(dashboardData.total_tours_by_month),
          datasets: [{
            label: 'Total Tours',
            data: Object.values(dashboardData.total_tours_by_month),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
      <h2>Pie Chart</h2>
      <Pie
        data={{
          labels: ['Prospects', 'Scheduled Tours', 'Completed Tours'],
          datasets: [{
            label: 'Tour Stats',
            data: [
              dashboardData.prospects,
              dashboardData.scheduled_tours,
              dashboardData.completed_tours_in_number
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        }}
      />
      </div>
      <div style={{width:'400px',height:'400px',marginLeft:'500px',display:'flex',justifyContent:'center',marginBottom:'20px',marginTop:'10px'}}>
 
       <h2>Line Chart</h2>
      <Line
  data={{
    labels: ['Prospects', 'Scheduled Tours', 'Completed Tours'],
    datasets: [{
      label: 'Tour Stats',
      data: [
        dashboardData.prospects,
        dashboardData.scheduled_tours,
        dashboardData.completed_tours_in_number
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  }}
/>
<h2>Radar Chart</h2>
<Radar
  data={{
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [{
      label: 'Dataset 1',
      data: [10, 20, 30, 40, 50],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  }}
/>
</div>
<div style={{width:'400px',height:'400px',marginLeft:'500px',display:'flex',justifyContent:'center',marginBottom:'20px',marginTop:'10px'}}>

<h2>Polar Area</h2>
<PolarArea
  data={{
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [{
      label: 'Dataset 1',
      data: [10, 20, 30, 40, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  }}
/>
<h2>Bubble Chart</h2>
<Bubble
  data={{
    datasets: [{
      label: 'Dataset 1',
      data: [
        { x: 20, y: 30, r: 15 },
        { x: 40, y: 10, r: 10 },
        { x: 35, y: 25, r: 20 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  }}
/>
</div>
<div style={{width:'400px',height:'400px',marginLeft:'500px',display:'flex',justifyContent:'center',marginBottom:'20px',marginTop:'10px'}}>
<h2>Scatter</h2>
<Scatter
  data={{
    datasets: [{
      label: 'Dataset 1',
      data: [
        { x: 20, y: 30 },
        { x: 40, y: 10 },
        { x: 35, y: 25 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  }}
/>



     </div>
  
    </>
  );
}

export default App;

