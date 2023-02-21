const Product = require('../models/Product')



exports.getProduct = async(req,res)=>{
    try {
        const products = await Product.find()
        res.send(products)
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }
}
exports.getOneProduct = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.send(product)
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }
}
exports.addProducts = async(req,res)=>{
    try {
        const newProduct =  new Product(req.body)
      await  newProduct.save()
        res.send(newProduct)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.deleteProducts = async(req,res)=>{
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.send({msg:`${deleteProduct.title} was successfully deleted` })
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
exports.editProducts = async(req,res)=>{
    try {
        const editProduct = await Product.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editProduct)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
exports.getCategoryProduct = async(req,res)=>{
    try {
        console.log(req.params)
        const products = await Product.find()
        console.log(products)
        res.send(products.filter(el=> el.category === req.params.category))
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }
}