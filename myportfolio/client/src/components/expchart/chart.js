import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
   const options = {
    plugins: {
      legend: false,
      // legend: {
      //   // labels: {
      //   //     font: {
      //   //         size: 13
      //   //     },
      //   //     color: 'white',
      //   // },
      // },
      title: {
        display: true,
        text: "Experiences Gained between 2018-2023",
        color: 'green',
        font: {
          size: 15,
        },
      },
    },
    scales: {
      y: {
        type: 'linear',
        grace: '10%'
      }
    },
  }
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={options}/>
    </div>
  );
};

export default BarChart;