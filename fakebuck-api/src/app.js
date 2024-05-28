require('dotenv') // readfile env แล้วเก็บข้อมูลในรูปแบบ obj
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const errorMiddleware = require('./middlewares/errorMiddleware')
const notFoundMiddleware = require('./middlewares/notFound')
const limiter = require('./middlewares/rate-limit')

const app = express()

app.use(cors)
app.use(morgan('dev'))
app.use(express.json())

app.use(notFoundMiddleware)
app.use(errorMiddleware)
app.use(limiter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log('server running on port: ', PORT))

