const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const id = uuidv4();




class ProductManager {

    constructor() {
        this.products= []
    }

    create({name, description, stock, price,id}){
        const product = new Product();

        Object.assign(product,{
            name,
            description,
            stock,
            price,
            id:id,
            created_at: new Date()
        })

        this.products.push(product)


    }


}



module.exports = ProductManager;