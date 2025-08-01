const Expense = require('../models/expenseModel');

<<<<<<< HEAD
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
=======
// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
>>>>>>> 0d7e1f77c66f0d85974f6d3024569851307c03e0
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

<<<<<<< HEAD
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
=======
// Get a single expense by ID
exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new expense
exports.createExpense = async (req, res) => {
  const { title, amount, date, category } = req.body;
  const expense = new Expense({ title, amount, date, category });
  try {
    const newExpense = await expense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExpense) return res.status(404).json({ message: 'Expense not found' });
    res.json(updatedExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) return res.status(404).json({ message: 'Expense not found' });
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
>>>>>>> 0d7e1f77c66f0d85974f6d3024569851307c03e0
};