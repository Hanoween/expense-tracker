const express = require('express');
const {
    getExpenses,
    getExpense,
    createExpense,
    deleteExpense
} = require('../controllers/expenseController');

const router = express.Router();

router.get('/', getExpenses);

router.get('/:id', getExpense);

router.post('/', createExpense);

router.delete('/:id', deleteExpense);

module.exports = router;