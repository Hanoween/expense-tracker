import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from '../components/Chart';

const Summary = () => {
    const [total, setTotal] = useState(0);
    const [budget, setBudget] = useState(0);
    const [change, setChange] = useState(null);
    const navigate = useNavigate();
    const date = new Date();

    let temp = 0;

    useEffect(() => {
        if (date.getDate() === 1) {
            setBudget(0);
        }
        
        const fetchExpenses = async () => {
            const response = await fetch('/api/expenses');
            const json = await response.json();
            const budget = await fetch('api/budget')
            const budJ = await budget.json();

            if (response.ok) {
                json.forEach(x => setTotal(temp += x.amount));
                setTotal(temp.toFixed(2));
            };

            if (budget.ok) {
                setBudget(budJ.budget);
            };
        };

        fetchExpenses();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (change != null) {
            const response = await fetch('/api/budget', {
                method: 'PATCH',
                body: JSON.stringify({
                    budget: change
                }),
                headers: {
                    'Content-type': 'application/json',
                }
            });

            navigate('/');
        }

    };

    return (
        <div>
            <Navbar />
            <div className="summary">
                <div className="content">
                    <div className='stats'>
                    <h1> My Monthly Goals </h1>
                        <div className="desc">Current budget:
                            <div className="display">${budget >= 0 ? parseFloat(budget).toFixed(2) : 0}</div>
                        </div>
                        <div className="desc">Total expenses this month:
                            <div className="display">${parseFloat(total).toFixed(2)}</div>
                        </div>
                        <div className="desc">
                            Edit my budget:
                            <form onSubmit={handleSubmit}>
                                <input
                                    className='display'
                                    type="text"
                                    onChange={e => setChange(e.target.value)}
                                    value={change}
                                    placeholder="Enter amount"
                                />
                                <button>Submit change</button>
                            </form>
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="chart">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;