// controllers/expenseController.js
const Expense = require('../models/Expense');
const User = require('../models/User');
const Joi = require('joi');

// Validation schema
const expenseValidationSchema = Joi.object({
    description: Joi.string().required(),
    totalAmount: Joi.number().required(),
    paidBy: Joi.string().required(),
    participants: Joi.array().items(Joi.object({
        user: Joi.string().required(),
        amountOwed: Joi.number().required()
    })),
    splitMethod: Joi.string().valid('equal', 'exact', 'percentage').required(),
});

// Add expense
exports.addExpense = async (req, res) => {
    try {
        const { error } = expenseValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().populate('participants.user').populate('paidBy');
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get individual user expenses
exports.getUserExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ 'participants.user': req.params.userId })
            .populate('participants.user')
            .populate('paidBy');
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
