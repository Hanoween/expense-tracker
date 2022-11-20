import { useExpensesContext } from '../hooks/useExpensesContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ExpenseDetails = ({ expense }) => {
    const { dispatch } = useExpensesContext();

    const handleClick = async () => {
        const response = await fetch('/api/expenses/' + expense._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_EXPENSE', payload: json });
        };
    };

    return (
        <div>
            <div className="expense-details">
                <div className="decat">
                    <p className="detail">{expense.detail}</p>
                    <p className="category"><strong>{expense.category.toUpperCase()}</strong></p>
                </div>
                <div className="right">
                    <div className="amda">
                            <p className="amount"><strong></strong>${expense.amount}</p>
                            <p>{formatDistanceToNow(new Date(expense.createdAt), { addSuffix: true })}</p>
                        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseDetails;