const Expense = require('../models/expenseModel');
const mongoose = require('mongoose');

const getExpenses = async (req, res) => {
    const expenses = await Expense.find({}).sort({ createdAt: -1 });

    res.status(200).json(expenses);
};

const getExpense = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'No such expense' });

    const expense = await Expense.findById(id);

    if (!expense) return res.status(404).json({ error: 'No such expense' });

    res.status(200).json(expense);
};

const createExpense = async (req, res) => {
    const { detail, category, amount } = req.body;
    let emptyFields = [];

    if (!detail) emptyFields.push('detail');
    if (!category) emptyFields.push('category');
    if (!amount) emptyFields.push('amount');
    if (emptyFields.length > 0) return res.status(400).json({error: 'Please fill in all the fields', emptyFields});

    try {
        const expense = await Expense.create({ detail, category, amount});
        res.status(200).json(expense);
    } catch(error) {
        res.status(400).json({error: error.message});
    };
};

const deleteExpense = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'No such expense' });

    const expense = await Expense.findOneAndDelete({_id: id});

    if (!expense) return res.status(404).json({ error: 'No such expense' });

    res.status(200).json(expense);
};

module.exports = {
    getExpenses,
    getExpense,
    createExpense,
    deleteExpense
}