const {Router} = require('express')
const router = Router()
const { v4: uuidv4 } = require('uuid');
const id = uuidv4();


const cartManag = require('../cartManager')
const carrito = new cartManag()

const Cart = [
    {"id":1,"products":[]},
    {"id":2,"products":[]},
    {"id":3,"products":[]},
    {"id":4,"products":[{"id":2,"quantity":2},{"id":4,"quantity":8}]}
]




const convertToNumber =(req, res ,next)=>{
    req.params.id = Number(req.params.id)
    next()
}

router.get('/:id',(req, res)=>{
    const {id} = req.params
    const cart =Cart.find(cart => cart.id === parseInt(id)) 
    if(cart == undefined){
      return res.send(`<h1>El id que colocó, no coincide con ninguno de los carritos enlistados</h1>`)
    }
    res.json(cart)
  
  })

  router.post ('/',(req, res)=>{
      carrito.newCart()
      res.json({msg: 'carrito añadido'})
    })
    
router.post('/:id/products/:id',(req,res)=>{
    const {prod,id,quantity} = req.body;
  
   const product ={
    prod,
    id:id,
    quantity
   }
    res.json({message:'prod Created'})
})    


module.exports= router