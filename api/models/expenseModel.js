const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
<<<<<<< HEAD
=======
  title: {
    type: String,
    required: true,
    trim: true
  },
>>>>>>> 0d7e1f77c66f0d85974f6d3024569851307c03e0
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    trim: true
<<<<<<< HEAD
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
=======
  }
}, {
>>>>>>> 0d7e1f77c66f0d85974f6d3024569851307c03e0
  timestamps: true
});

module.exports = mongoose.model('Expense', expenseSchema);