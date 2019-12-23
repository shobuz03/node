const express = require('express')
const app = express()
const port = 3000
//const port = process.env.PORT
const userRouter = require('./src/routers/user')
require('./src/db/db')

//setup middleware
app.use(express.json())
app.use(userRouter)
app.listen(port, () => console.log(`Server running on port ${port}`))