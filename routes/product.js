const express = require('express')
const { getProduct, addProducts, deleteProducts, getOneProduct, editProducts, getCategoryProduct } = require('../controllers/product.controllers')
const auth = require('../middleware/auth')
const router = express.Router()
const roleValidation = require('../middleware/role')

router.get('/get_products',getProduct)
router.get('/get_product/:id',getOneProduct)
router.post('/add_product',auth,roleValidation(['Admin']),addProducts)
router.delete('/delete_product/:id',auth,roleValidation(['Admin']),deleteProducts)
router.put('/edit_product/:id',auth,roleValidation(['Admin']),editProducts)
router.get('/get_category_product/:category',getCategoryProduct)








module.exports = router