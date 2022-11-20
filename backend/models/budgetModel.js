const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    name: {
        type: String
    },
    budget: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Budget', budgetSchema);