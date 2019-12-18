const express = require('express')
const app = express()

const port = process.env.PORT
const userRouter = require('./routers/user')
require('./db/db')

app.use(express.json())
//app.use(userRouter)
app.listen(port, () => console.log(`Server running on port ${port}`))