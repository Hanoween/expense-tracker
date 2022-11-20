import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

const Summary = () => {
    const [total, setTotal] = useState(0);
    const [budget, setBudget] = useState(0);
    const [change, setChange] = useState(0);
    let temp = 0;

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await fetch('/api/expenses');
            const json = await response.json();
            
            if (response.ok) {
                json.forEach(x => setTotal(temp += x.amount));
                setTotal(temp);
            }
        };

        fetchExpenses();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setBudget(change);
    }
    
    return (
        <div>
            <Navbar />
            <div className="summary">
                <h1> My Monthly Financial Goals </h1>
                <div className="content">
                    <div className='stats'>
                        <div className="desc">Current Budget:
                            <div className="display">{ budget >= 0 ? budget : 0 }</div>
                        </div>
                        <div className="desc">Total expense this month:
                            <div className="display">{ total }</div>
                        </div>
                        <div className="desc">
                            Edit my budget:
                            <form onSubmit={handleSubmit}>
                                <input
                                    className='display'
                                    type="number"
                                    onChange={e => setChange(e.target.value)}
                                    value={change}
                                    placeholder="Enter amount"
                                />  
                                <button>Submit change</button>
                            </form>
                        </div>
                    </div>
                    <div className="graph"></div>
                </div>
            </div>
        </div>
    )
}

export default Summary;