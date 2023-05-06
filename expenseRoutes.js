const express = require('express');
const router = express.Router();
const {
  createExpense,
  getExpenses,
  deleteExpense,
  updateExpense
} = require('../controllers/expenseController');

router.get('/', getExpenses);
router.post('/', createExpense);
router.delete('/:id', deleteExpense);
router.put('/:id', updateExpense);

module.exports = router;
