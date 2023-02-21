const User = require("../models/User")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const secret = config.get('secret')





exports.Register = async(req,res)=>{
    const {name,email,phone,address,password,registerDate,userRole}=req.body
    try {
        const searchRes = await User.findOne({email})
        if(searchRes){
            return res.status(401).json({msg:'User already exists'})
        }
        const newUser = new User({
            name,
            email,
            phone,
            address,
            password,
            registerDate,
            userRole,
        })
         const  salt = await bcrypt.genSalt(10);
         const hash = await bcrypt.hash(newUser.password, salt);
         newUser.password = hash

        await newUser.save()
        res.send(newUser)
        
    } catch (error) {
        res.status(500).json({msg:message.error})
        
    }
}
exports.Login = async(req,res)=>{
    const{email,password}=req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:'email or password invalid'})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg:'email or password invalid'})
        }
        const payload={
            id:user._id
        }
          const token = jwt.sign(payload,secret);
        res.send({
            token, 
            id:user._id,
            name:user.name,
            email:user.email,
            address:user.address,
            registerDate:user.registerDate,
            userRole:user.userRole,
       
        

        })
    } catch (error) {
        res.status(500).json({msg:message.errors})
        
    }
}

exports.getUser= (req,res)=>{
    res.send(req.user)
}