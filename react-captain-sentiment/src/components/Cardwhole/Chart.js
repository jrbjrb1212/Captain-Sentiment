import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


class Chart extends Component {

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
    }
    

    render() {
        return(
            <div className="chart">
                Hello
            </div>
        )
    }
}

export default Chart;

