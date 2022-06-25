function makeChart(movie) {
    const ctx = document.getElementById('chart').getContext("2d");

    let delayed = true;
    //Gradient Fill
    let gradient = ctx.createLinearGradient(0,0,0,400);
    gradient.addColorStop(0,'rgba(58,123,213,1');
    gradient.addColorStop(1,'rgba(0,210,255,0.3)');

    var name = movie.map(function(d){
        return d.Name
    });
    const polarityLabels = movie.map(function(d) {
        return d.Polarity;
    });
    const lengthData = movie.map(function(d) {
        return +d.Length;
    });
    
    const data = {
        labels: lengthData,
        datasets: [
            {
                data: polarityLabels,
                label: name[0],
                fill: true,
                display: true,
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
            hoverRadius: 12,
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
                        text: "Course of the Movie",
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
                        display: true,
                        color: 'black',
                    }
                }
            },
        },

    };

    const chart = new Chart(ctx, config)

} //function ending


d3.csv('test_csv.csv').then(makeChart);

