import { useExpensesContext } from "../hooks/useExpensesContext";
import { useEffect } from "react";
import ExpenseDetails from "../components/ExpenseDetails";
import ExpenseForm from "../components/ExpenseForm";
import Navbar from "../components/Navbar";

const Home = () => {
    const { expenses, dispatch } = useExpensesContext();
    const date = new Date();

    useEffect(() => {
        const deleteAll = async () => {
            const response = await fetch('/api/expenses', {
                method: 'DELETE'
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'DELETE_EXPENSES', payload: json})
            }
        }
        const fetchExpenses = async () => {
            const response = await fetch('/api/expenses');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_EXPENSES', payload: json });
            }
        };
        if (date.getDate() == 1) deleteAll();

        fetchExpenses();
    }, [dispatch]);
    return (
        <div className="home">
            <Navbar />
            <div className="expenses">
                <div className="left">
                    <h1>Welcome!</h1>
                    <img src={require("../images/logo.png")} />
                    <ExpenseForm />
                </div>
                <div className="list">
                    <h1>Latest expenses this month</h1>
                    {expenses && expenses.map(expense => (
                        <ExpenseDetails key={expense._id} expense={expense} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;