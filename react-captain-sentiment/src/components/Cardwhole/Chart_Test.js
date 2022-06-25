import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart_Test() {

  let delayed;
  const data = {
    labels: [1,2,3,4,5,1,2,3,4,5],
    datasets: [
      {
        label: "Users Gained",
        data: [100,200,300,400,100,100,200,300,400,100],
        fill: false,
        display: true,
        backgroundColor: "black",
        borderColor: "grey",
        pointBackgroundColor: "white",
        tension: 0.35,
      },
    ],
  };

  const options = {
    responsive: true,
            maintainAspectRatio: false,
            radius: 5,
            hitRadius: 30,
            hoverRadius: 12,
            animations: {
              borderWidth: {
                duration: 2000,
                easing: 'linear',
                from: 2,
                to: 5,
                loop: true
              }
                
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Course of the Movie",
                        color: "black",
                    },
                    ticks: {
                        display: false,
                        color: "black",
                    }
                },
                y: {
                    beginAtZero:true,
                    title: {
                        display: true,
                        text: "Polarity",
                        color: "black"
                    },
                    ticks: {
                        display: true,
                        color: 'black',
                    }
                }
            },
  }

  return (
      <Line data={data} options={options}/>
  )

}
export default Chart_Test


