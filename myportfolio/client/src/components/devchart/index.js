import { Chart } from "react-chartjs-2";
import "./style.css";


export default function DevChart (){
  return (
    <div className="dev-chart">
        <Chart
        type="doughnut"
        data={{
            labels: ['Frontend', 'Backend'],
            datasets: [
            {
                backgroundColor: ['#1ed9b3', '#9ea8a6'],
                data: [35, 65]
            },
            ],
        }}
        options={{
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 14
                        },
                        color: 'blue'
                    }
                },
                title: {
                    display: true,
                    text: "Web Development Frontend and Backend",
                    color: 'green',
                    // This more specific font property overrides the global property
                    font: {
                        size: 16,
                    },
                },
            },
            legend: {
                display: true,
                color: 'blue',
                labels:{
                    font: {
                        size: 5,
                    }
                }
            }
        }}
        />
</div>)
}