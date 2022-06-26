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
          backgroundColor: "white",
          borderColor: movie.primaryColor,
          pointBackgroundColor: "white",
          tension: 0.35,
          pointLabelFontSize: 50,
        },
        {
          label: "Subjectivity",
          data: movie.subjectivty,
          fill: false,
          hidden: movie.subjectivtyToggle,
          backgroundColor: "white",
          borderColor: movie.primaryColor,
          pointBackgroundColor: "white",
          tension: 0.35,
          pointLabelFontSize: 50,
        },
      ],
    };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    borderColor: movie.secondColor,
    radius: 5,
    hitRadius: 30,
    hoverRadius: 12,
    animations: {
      borderWidth: {
        duration: 2000,
        easing: 'linear',
        from: 3,
        to: 6,
        loop: true
      },
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.25,
        to: 0.5,
        loop: true
      }
    },
    title: {
      display: true,
      text: movie.movieName + " " + movie.movieYear
    },
    scales: {
        x: {
          grid: {
            color: '#404040'
          },
          title: {
              display: true,
              text: "Course of the Movie",
              color: movie.primaryColor,
              font:{
                family: 'Helvetica',
                size: '17px'
              } 
          },
          ticks: {
              display: false,
              color: movie.primaryColor,
          }
        },
        y: {
            beginAtZero:true,
            grid: {
              color: '#404040'
            },
            title: {
                display: true,
                text: movie.subjectivtyToggle ? "Polarity" : "Subjectivity",
                color: movie.primaryColor,
                font:{
                  family: 'Helvetica',
                  size: '17px'
                } 
            },
            ticks: {
                display: true,
                tickLength: 16,
                font:{
                  size: '14px'
                },
                color: movie.primaryColor,
            }
        }
    },
  }

  return (
      <Line data={data} options={options}/>
  )

}
export default Chart_Test
