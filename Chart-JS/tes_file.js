function makeChart(movie) {
    const ctx = document.getElementById('chart').getContext("2d");

    let delayed;
    //Gradient Fill
    let gradient = ctx.createLinearGradient(0,0,0,400);
    gradient.addColorStop(0,'rgba(58,123,213,1');
    gradient.addColorStop(1,'rgba(0,210,255,0.3)');

    var playerLabels = movie.map(function(d) {
        return d.Polarity;
    });
    var weeksData = movie.map(function(d) {
        return +d.Length;
    });

var chart = new Chart(ctx, {
    type: "line",
    options: {
        responive: true,
        maintainAspectRatio: false,
        radius: 5,
        hitRadius: 30,
        hoverRadius: 30,
        legend: {
            display: false
        }
    },
    data: {
        labels: weeksData,
        datasets: [
            {
            data: playerLabels
            }
        ]
    }
});


}


d3.csv('test_csv.csv').then(makeChart);

