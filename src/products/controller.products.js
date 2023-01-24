const {Router} = require('express')
const fs =require('fs')
const prodManag= require ('../productManager.js')
const router = Router();


const products = new prodManag()

const convertToNumber =(req, res ,next)=>{
    req.params.id = Number(req.params.id)
    next()
}

router.get ('/',(req, res)=>{
    res.json({products})
})

router.get ('/:id',convertToNumber,(req, res)=>{
    const id = req.params;
    res.json({message: id })
})

router.post ('/',async(req, res)=>{
    const infoProduct = req.body
    products.push(infoProduct)
    
    res.json({message: 'Hi products Created'})
})


module.exports= router