const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/expense-tracker"
mongoose.connect(db)
   .then(console.log('Connect DB succeed !'))
   .catch(err => console.log('Connect db failed ! ' + err))

const router = require("./api/routes/VocabRoute")
router(app)

const port = 3000

app.listen(port, () => {
   console.log("Server is running at http://localhost:" + port)
})