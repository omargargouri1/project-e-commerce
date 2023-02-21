const express = require('express')
const connectDB = require('./config/connectDB')
const product = require('./routes/product')
const user = require('./routes/user')


const app = express()

connectDB()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use('/user',user)
app.use('/product',product)



app.listen(PORT,err=>err?console.log(err):console.log(`server is running on port ${PORT}`))