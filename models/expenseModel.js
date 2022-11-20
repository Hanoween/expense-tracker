const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    detail: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number
    }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);