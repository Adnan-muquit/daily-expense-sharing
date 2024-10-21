// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/expenses', expenseController.addExpense);
router.get('/expenses', expenseController.getAllExpenses);
router.get('/expenses/user/:userId', expenseController.getUserExpenses);

module.exports = router;
