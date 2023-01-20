const {Router} = require('express')

const router = Router()

const carts = []


const convertToNumber =(req, res ,next)=>{
    req.params.id = Number(req.params.id)
    next()
}

router.get('/',async(req, res)=>{
    const {limit} = req.query
    let absLimit= Math.abs(limit) 
    let allProd = await products.getProducts()
    let limitedProds = allProd.slice(0, absLimit)
    if (absLimit) {
      if (absLimit>allProd.length) {
        return res.send(`<h1>El límite establecido es mayor a la cantidad de productos existentes</h1>`)
      }
      return res.send(limitedProds)
    }
    res.json({message: carts})
})

router.get('/:pid',convertToNumber,(req, res)=>{
    const id = req.params.id
    res.json({message: id + 5})
})

router.post ('/',(req, res)=>{
    const infoCart = req.body
    carts.push(infoCart)

    res.json({message: 'carts Created'})
})

module.exports= router