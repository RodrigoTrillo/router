const {Router} = require('express')

const router = Router();

const products = []

const convertToNumber =(req, res ,next)=>{
    req.params.id = Number(req.params.id)
    next()
}

router.get ('/',(req, res)=>{
    res.json({message: products})
})

router.get ('/:id',convertToNumber,(req, res)=>{
    const id = req.params.id
    res.json({message: id + 5})
})

router.post ('/',(req, res)=>{
    const infoProduct = req.body
    products.push(infoProduct)
    
    res.json({message: 'Hi products Created'})
})


module.exports= router