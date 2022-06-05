function makeChart(movie) {
    const ctx = document.getElementById('chart').getContext("2d");

    let delayed;
    //Gradient Fill
    let gradient = ctx.createLinearGradient(0,0,0,400);
    gradient.addColorStop(0,'rgba(58,123,213,1');
    gradient.addColorStop(1,'rgba(0,210,255,0.3)');

    var polarityLabels = movie.map(function(d) {
        return d.Polarity;
    });
    var weeksData = movie.map(function(d) {
        return +d.Length;
    });
    
    const data = {
        labels: weeksData,
        datasets: [
            {
                data: polarityLabels,
                label: "Ant Man 2015",
                fill: true,
                backgroundColor: gradient,
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
            hoverRadius: 50,
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === "data" && context.mode === "default" && !delayed){
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Movie Intervals",
                        color: "black",
                    },
                    ticks: {
                        display: false,
                        color: "black",
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Polarity",
                        color: "black"
                    },
                    ticks: {
                        color: 'black',
                    }
                }
            },
        },

    };

    const myChart = new Chart(ctx, config)

    // var chart = new Chart(ctx, {
    //     type: "line",
    //     options: {
    //         responive: true,
    //         maintainAspectRatio: false,
    //         radius: 5,
    //         hitRadius: 30,
    //         hoverRadius: 30,
    //         legend: {
    //             display: false
    //         }
    //     },
    //     data: {
    //         labels: weeksData,
    //         datasets: [
    //             {
    //             data: playerLabels
    //             }
    //         ]
    //     }
    // });

} //function ending


d3.csv('test_csv.csv').then(makeChart);

