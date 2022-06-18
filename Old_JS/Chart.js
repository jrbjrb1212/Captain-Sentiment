const Chart = ( { movies }) => {
    console.log(movies)
    // const ctx = document.getElementById('chart').getContext("2d");

    // let gradient = ctx.createLinearGradient(0,0,0,400);
    // gradient.addColorStop(0,'rgba(58,123,213,1');
    // gradient.addColorStop(1,'rgba(0,210,255,0.3)');

    const movieTitle = movies.map( function (movie) {
        return movie.movieName;
    });
    
    const lengthData = movies.map( function (movie) {
        return +movie.lengthData;
    });

    const polarityLabels = movies.map( function (movie) {
        return +movie.polarityLabels;
    });

    const subjectivityLabels = movies.map( function (movie) {
        return +movie.subjectivityLabels;
    });

    // console.log(subjectivityLabels)
    // console.log(lengthData)
    // console.log(polarityLabels)
    // console.log(movieTitle)

    const data = {
        labels: lengthData,
        datasets: [
            {
                data: polarityLabels,
                label: movieTitle,
                fill: true,
                display: true,
                // backgroundColor: gradient,
                borderColor: "grey",
                pointBackgroundColor: "white",
                tension: 0.4,
            },  
        ],
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            radius: 5,
            hitRadius: 30,
            hoverRadius: 12,
            // animation: {
            //     onComplete: () => {
            //         delayed = true;
            //     },
            //     delay: (context) => {
            //         let delay = 0;
            //         if (context.type === "data" && context.mode === "default" && !delayed){
            //             delay = context.dataIndex * 300 + context.datasetIndex * 100;
            //         }
            //         return delay;
            //     },
            // },
            // scales: {
            //     x: {
            //         title: {
            //             display: true,
            //             text: "Course of the Movie",
            //             color: "black",
            //         },
            //         ticks: {
            //             display: false,
            //             color: "black",
            //         }
            //     },
            //     y: {
            //         title: {
            //             display: true,
            //             text: "Polarity",
            //             color: "black"
            //         },
            //         ticks: {
            //             display: true,
            //             color: 'black',
            //         }
            //     }
            // },
        },

    };

    // const chart = new Chart(ctx, config)
    return (
        <div className="chart">
            <canvas id="chart"></canvas>
        </div>
    )
}

export default Chart
