import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart_Test({ movie }) {

  let delayed;
  const data = {
    labels: movie.lengthData,
    datasets: [
      {
        label: "Polarity",
        data: movie.polarity,
        fill: false,
        display: true,
        backgroundColor: "black",
        borderColor: "grey",
        pointBackgroundColor: "white",
        tension: 0.35,
      },
      {
        label: "Subjectivity",
        data: movie.subjectivty,
        fill: false,
        display: false,
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


