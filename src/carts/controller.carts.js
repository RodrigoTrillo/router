const {Router} = require('express')
const newCart = Router()
const router = Router()
const cartManag = require('../cart.js')
const carrito = new cartManag()
const carts = []


const convertToNumber =(req, res ,next)=>{
    req.params.id = Number(req.params.id)
    next()
}

router.get('/',(req, res)=>{
  
    res.json({message: carts})
})

router.get('/:pid',convertToNumber,(req, res)=>{
    const id = req.params.id
    res.json({message: id + 5})
})

router.post ('/',(req, res)=>{
    carrito.newCart()
  res.json({msg: 'carrito añadido'})
})

module.exports= router