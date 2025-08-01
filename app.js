const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')
<<<<<<< HEAD
const db = "mongodb+srv://user1:1234Abcd@cluster0.nm8dlbn.mongodb.net/expense-tracker"
=======
const db = "mongodb://localhost:27017/expense-tracker"
>>>>>>> 0d7e1f77c66f0d85974f6d3024569851307c03e0
mongoose.connect(db)
   .then(console.log('Connect DB succeed !'))
   .catch(err => console.log('Connect db failed ! ' + err))

<<<<<<< HEAD
const router = require("./api/routes/expenseRoute")
=======
const router = require("./api/routes/VocabRoute")
>>>>>>> 0d7e1f77c66f0d85974f6d3024569851307c03e0
router(app)

const port = 3000

app.listen(port, () => {
   console.log("Server is running at http://localhost:" + port)
})