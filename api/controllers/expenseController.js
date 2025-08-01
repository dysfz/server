const Expense = require('../models/expenseModel');

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({}).sort({ _id: -1 })
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).send(err);
  }
}; 

const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (expense != null) {
      res.status(200).json(expense);
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const createExpense = async (req, res) => {
  try {
    const newExpense = req.body
    await Expense.create(newExpense)
    res.status(201).json(newExpense)
  } catch (err) {
    res.status(400).send(err)
  }
};

const updateExpense = async (req, res) => {
  try {
    const id = req.params.id
      const updatedExpense = req.body
      await Expense.findByIdAndUpdate(id, updatedExpense)
      res.json({ 'message' : 'Expense updated successfully' });
  } catch (err) {
    res.status(400).send(err)
  }
};

const deleteExpense = async (req, res) => {
  try {
      await Expense.findByIdAndDelete(req.params.id)
      res.json({ 'message' : 'Expense deleted successfully' });
   } catch (err) {
      res.status(500).json(err)
   }
};

const deleteAllExpenses = async (req, res) => {
   try {
      await Expense.deleteMany()
      res.json({ 'message' : 'All expenses deleted successfully' });
   } catch (err) {
      res.status(500).json(err)
   }
}

module.exports = {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
  deleteAllExpenses
}