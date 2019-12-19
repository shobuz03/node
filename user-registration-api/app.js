const express = require('express')
const app = express()

const port = process.env.PORT
const userRouter = require('./src/routers/user')
require('./src/db/db')

app.use(express.json())
app.use(userRouter)
console.log('hello ahasan');
app.listen(port, () => console.log(`Server running on port ${port}`))