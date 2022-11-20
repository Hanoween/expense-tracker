const express = require('express');
const {
    getExpenses,
    getExpense,
    createExpense,
    deleteExpense,
    deleteExpenses
} = require('../controllers/expenseController');

const router = express.Router();

router.get('/', getExpenses);

router.get('/:id', getExpense);

router.post('/', createExpense);

router.delete('/:id', deleteExpense);

router.delete('/', deleteExpenses);

module.exports = router;