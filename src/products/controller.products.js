const {Router} = require('express')
const fs =require('fs');
const router = Router();
const { v4: uuidv4 } = require('uuid');
const id = uuidv4();

 const Product = [
    {
        "title": "prod1",
        "stock": 121,
        "description": "",
        "price": 100,
        "thumbnail": "reultrasecretofads",
        "code": "123abdefghy",
        "category":"Product",
        "status":true,
        "id": 1
      },
    {
        "title": "prod2",
        "stock": 121,
        "description": "",
        "price": 100,
        "thumbnail": "reultrasecretofads",
        "code": "123abdefghy",
        "category":"Product",
        "status":true,
        "id": 2
      },
    {
        "title": "prod3",
        "stock": 121,
        "description": "",
        "price": 100,
        "thumbnail": "reultrasecretofads",
        "code": "123abdefghy",
        "category":"Product",
        "status":true,
        "id": 3
      },
    {
        "title": "prod4",
        "stock": 121,
        "description": "",
        "price": 100,
        "thumbnail": "reultrasecretofads",
        "code": "123abdefghy",
        "category":"Product",
        "status":true,
        "id": 4
      },
] 


const convertToNumber =(req, res ,next)=>{
    req.params.id = Number(req.params.id)
    next()
}

router.get ('/',(req, res)=>{

  const {limit} = req.query
  let absLimit= Math.abs(limit) 
  let limitedProds = Product.slice(0, absLimit)
  if (absLimit) {
    if (absLimit>Product.length) {
      return res.send(`<h1>El límite establecido es mayor a la cantidad de productos existentes</h1>`)
    }
    return res.send(limitedProds)
  }
  res.json(Product)
})

router.get ('/:id',convertToNumber,(req, res)=>{
  const {id} = req.params
  const product =Product.find(product => product.id === parseInt(id)) 
  if(product == undefined){
    return res.send(`<h1>El id que colocó, no coincide con ninguno de los productos enlistados</h1>`)
  }
  res.json(product)

})

router.post ('/',async(req, res)=>{
   const {name, description, title, stock, price,id,category,status} = req.body;
  
   const product ={name,
    description,
    title,
    stock,
    price,
    category,
    status,
    id}
    res.json({message:'prod Created'})
})

router.put('/', (req, res)=>{
  
})

router.delete('/:id',async(req, res)=>{
  const {id} = req.params
  const product =Product.find(product => product.id === parseInt(id)) 
  if(product == undefined){
    return res.send(`El producto con id ${id} no  se elimino`)
  }
  return res.json(`El producto con el id: ${id} se elimino correctamente`)
  



  try {
    await Product(req.params.id);
    res.status(200).send("Product has been deleted...");
  } catch (error) {
    res.status(500).send(error);
  }
})


module.exports= router