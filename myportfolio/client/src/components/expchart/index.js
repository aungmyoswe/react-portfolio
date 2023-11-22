import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "./chart";
import './style.css'


Chart.register(CategoryScale);
 
export default function ExpChart() {
    const data = {
        labels: ['Python', 'PHP',  'ReactJs','Django', 'Bootstrap','JavaScript', 'HTML','XML','CSS' ],
        datasets: [
            {
              label: 'Most Experiences of colours',
              barPercentage: 1,
              barThickness:  20,
              maxBarThickness: 20,
              minBarLength: 1,
              minBarWidth: 1,
              BarHeight:1,
              fill: false,
              data: [95, 60, 55, 50, 50, 70, 60, 50, 50],
              backgroundColor: [
                'blue',
                '#735871',
                'gray',
                'lightgray',
                'yellow',
                'lightyellow',
                '#b8342a',
                'green',
                'lightgreen',
              ],
              borderWidth: 1,
            }
        ],
        width: 200
}

  return (
      <BarChart chartData={data}/>
  );
}