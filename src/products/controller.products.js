const {Router} = require('express')
const prodManag = require ('../productManager.js')
const router = Router();
const { v4: uuidv4 } = require('uuid');

const products = []
uuidv4();

const convertToNumber =(req, res ,next)=>{
    req.params.id = Number(req.params.id)
    next()
}

router.get ('/',(req, res)=>{
    res.json({message: products})
})

router.get ('/:id',convertToNumber,(req, res)=>{
    const id = req.params.uuidv4();
    res.json({message: id + 5})
})

router.post ('/',(req, res)=>{
    const id = uuidv4();
    const infoProduct = req.body
    products.push(infoProduct)
    
    res.json({message: 'Hi products Created'})
})


module.exports= router