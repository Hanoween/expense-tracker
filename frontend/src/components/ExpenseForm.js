import { useState } from "react";
import { useExpensesContext } from "../hooks/useExpensesContext";

const ExpenseForm = () => {
    const { dispatch } = useExpensesContext();
    const [detail, setDetail] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const expense = { detail, category, amount }

        console.log(expense);
        const response = await fetch('/api/expenses', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            console.log(json.error, json.emptyFields);
            if (!json.emptyFields > 0) setError("Invalid input");
            else setError(json.error)
            setEmptyFields(json.emptyFields);
        };
        if (response.ok) {
            setDetail('');
            setCategory('');
            setAmount('');
            setError(null);
            setEmptyFields([]);
            console.log('new expense added', json);
            dispatch({ type: 'CREATE_EXPENSE', payload: json });
        }
    };

    return (
        <div className="body">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter details"
                    onChange={(e) => { setDetail(e.target.value) }}
                    value={detail}
                    className={emptyFields && emptyFields.includes('detail') ? 'error' : ''}
                />

                <select
                    className={emptyFields && emptyFields.includes('category') ? 'error selectCustom js-selectCustom' : "selectCustom js-selectCustom"}
                    value={category}
                    onChange={(e) => { setCategory(e.target.value) }}

                >
                    <option className="selectCustom-trigger" value="" disabled selected>Select your option</option>
                    <option className="selectCustom-option" value="education">Education</option>
                    <option className="selectCustom-option" value="transportation">Transportation</option>
                    <option className="selectCustom-option" value="rent">Rent</option>
                    <option className="selectCustom-option" value="entertainment">Entertainment</option>
                    <option className="selectCustom-option" value="food">Food</option>
                </select>

                <input
                    type="text"
                    placeholder="Enter $amount "
                    onChange={(e) => { setAmount(e.target.value) }}
                    value={amount}
                    className={emptyFields && emptyFields.includes('amount') ? 'error' : ''}
                />

                <button>Add expense</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div >

    );
}

export default ExpenseForm;