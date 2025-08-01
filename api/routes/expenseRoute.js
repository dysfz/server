const ExpenseController = require('../controllers/expenseController');
const Expense = require('../models/expenseModel');

const ExpenseRoute = (app) => {
   app.route("/expenses")
      .get(ExpenseController.getAllExpenses)
      .post(ExpenseController.createExpense)
      .delete(ExpenseController.deleteAllExpenses)

   app.route("/expenses/:id")
      .get(ExpenseController.getExpenseById)
      .put(ExpenseController.updateExpense)
      .delete(ExpenseController.deleteExpense)
}

module.exports = ExpenseRoute;