const router = require("./products/controller.products");

class cartManager {

  constructor() {
      this.cart= []
  }

  create({id, products}){
      const cart = new Cart();

      Object.assign(cart,{
         
          id:id,
          products,
          created_at: new Date()
      })

      this.cart.push(cart)


  }


}




module.exports = router