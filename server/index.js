require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/authRoute')

const { dbConnect } = require('./config/connect')
const { notFound, errorHandler } = require('./middlewares/handler')

const app = express()
const PORT = process.env.PORT || 4000

dbConnect()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/auth', authRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server dang chay tai dia chi http://localhost:${PORT}`)
})