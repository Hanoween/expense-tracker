import { useState } from "react";
import BarChart from "./BarChart";
import { useEffect } from "react";

const Chart = () => {
    const [labels, setLabels] = useState([]);
    const [amounts, setAmounts] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await fetch('/api/expenses');
            const json = await response.json();

            if (response.ok) {
                json.forEach(x => setLabels(labels.push(x.category)));
                setLabels(labels.sort());

                let education = 0;
                let entertainment = 0;
                let food = 0;
                let rent = 0;
                let transportation = 0;

                await json.forEach(x => {
                    if (x.category === "education") education += x.amount;
                    if (x.category === "entertainment") entertainment += x.amount;
                    if (x.category === "food") food += x.amount;
                    if (x.category === "rent") rent += x.amount;
                    if (x.category === "transportation") transportation += x.amount;
                })

                setAmounts([education, entertainment, food, rent, transportation].map(
                    cat => { amounts.push(cat) }));
                console.log(json, labels, amounts);
            }
        }
        fetchExpenses();
    }, []);

    const [chartData, setChartData] = useState({
        labels: ["education", "entertainment", "food", "rent", "transportation"],
        datasets: [
            {
                label: "Your expense amount",
                data: amounts,
                backgroundColor:
                    ["rgba(214, 15, 6, 0.4)", "rgba(255,123, 0, 0.4)", "rgba(6, 182, 99, 0.4)", "rgba(16, 124, 195, 0.4)", "rgba(6, 33, 131, 0.4)"],
                borderColor: ["rgba(214, 15, 6, 1)", "rgba(255,123, 0, 1)", "rgba(6, 182, 99, 1)", "rgba(16, 124, 195, 1)", "rgba(55, 86, 197, 1)"],
                borderWidth: 1,
            }
        ]
    });

    return (
        <div className="chart">
            <BarChart chartData={chartData} />
        </div>
    )
};

export default Chart;