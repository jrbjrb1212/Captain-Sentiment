import React from "react";
import { Line } from "react-chartjs-2";

function Chart_Test({ movie }) {

  const data = {
    labels: movie.lengthData,
    datasets: [
      {
        label: "Polarity",
        data: movie.polarity,
        fill: false,
        hidden: movie.polarityToggle,
        backgroundColor: "black",
        borderColor: "grey",
        pointBackgroundColor: "white",
        tension: 0.35,
        fill: true,
        backgroundColor: 'red',
      },
      {
        label: "Subjectivity",
        data: movie.subjectivty,
        fill: false,
        hidden: movie.subjectivtyToggle,
        backgroundColor: "black",
        borderColor: movie.primaryColor,
        pointBackgroundColor: "white",
        tension: 0.35,
        fill: true,
        backgroundColor: movie.secondaryColor,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    borderColor: movie.secondaryColor,
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
    title: {
      display: true,
      text: movie.movieName + " " + movie.movieYear
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
