const mongoose = require('mongoose')
const config = require('config')
const db = config.get('db')


const connectDB = async()=>{
    try {
        await mongoose.connect(db)
        console.log('database connected...') 
    } catch (error) {
        console.error(error)  
    }
}


module.exports = connectDB