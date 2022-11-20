import React from "react";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container">
            <h1>MONTHLY EXPENSES</h1>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
};
export default BarChart;