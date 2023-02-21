const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name:String,
    email:String,
    phone:String,
    address:String,
    password:String,
    registerDate:{
        type:Date,
        default:Date.now,
    },
    userRole:{
        type:String,
        default:'User',
        roles:['user','Admin']

    }

})



module.exports = User = mongoose.model('User',userSchema)