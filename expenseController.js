const Expense = require('../models/expense');

exports.createExpense = async (req, res) => {
  try {
    const { description, amount } = req.body;
    const newExpense = await Expense.create({ description, amount });
    res.status(201).json(newExpense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findOne({ where: { id } });
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    await expense.destroy();
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount } = req.body;
    const expense = await Expense.findOne({ where: { id } });
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    expense.description = description;
    expense.amount = amount;
    await expense.save();
    res.status(200).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
