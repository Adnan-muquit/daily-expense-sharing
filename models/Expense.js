// models/Expense.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    paidBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    participants: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        amountOwed: { type: Number, required: true }
    }],
    splitMethod: { type: String, enum: ['equal', 'exact', 'percentage'], required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);
