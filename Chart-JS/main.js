const ctx = document.getElementById('myChart').getContext("2d");

let delayed;

//Gradient Fill
let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0,'rgba(58,123,213,1');
gradient.addColorStop(1,'rgba(0,210,255,0.3)');



const labels = [
    '237',
    '473',
    '709',
    '945',
    '1181',
    '1417',
    '1653',
    '1800',
    '1900',
    '2000',
    '2100',
    '2200',
    '2400',
]

const data = {
    labels,
    datasets: [
        {
            data: [0.1303030303030303, 0.23125, 0.20941558441558447, 0.008516483516483495, 0.3115601503759398, 0.06313131313131315, 0.023427552839317554, -0.62, -0.31, -0.11, -.015, .12, .30],
            label: "Ant Man 2015",
            fill: true,
            display: false,
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
        responive: true,
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,      
        animation:{
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




