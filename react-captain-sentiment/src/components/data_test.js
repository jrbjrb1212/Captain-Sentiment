const data_test = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
            label: 'Popularity of colours',
            data: [55, 23, 96],
              // you can set indiviual colors for each bar
            backgroundColor: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)'
            ],
            borderWidth: 1,
            }
        ]
}


module.exports = {data_test};
