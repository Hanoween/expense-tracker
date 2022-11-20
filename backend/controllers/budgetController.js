const Budget = require('../models/budgetModel');
const mongoose = require('mongoose');

const getBudget = async (req, res) => {
    const budget = await Budget.findOne({"name": "BestGang"});

    res.status(200).json(budget);
};

const updateBudget = async (req, res) => {
    const amount = req.body;

    if (!amount) {
        return res.status(400).json({error: "No value entered"})
    }

    Budget.findOneAndUpdate({"name": "BestGang"}, {$set: amount}, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        else res.status(200).json(doc);
    });
}

module.exports = {
    getBudget,
    updateBudget
}