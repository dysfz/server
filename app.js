const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')
const db = "mongodb+srv://user1:1234Abcd@cluster0.nm8dlbn.mongodb.net/expense-tracker"
mongoose.connect(db)
   .then(console.log('Successfully connected to DB'))
   .catch(err => console.log('Failed to connect to DB ' + err))

const router = require("./api/routes/expenseRoute")
router(app)

const port = 3000

app.listen(port, () => {
   console.log("Server is running at http://localhost:" + port)
})