const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const products = [];
const id = uuidv4();
const code = uuidv4()
class ProductManager{

    
    
    
  addProduct = (id,title, description, price, thumbnail, code, stock)=>{
        products.push({
            id: id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        });
    }
    
    
}

let productManager = new ProductManager();
    productManager.addProduct(id,'Producto1',"description1","$33",'img1',code,"22")
    productManager.addProduct(id,'Producto2',"description2","$55",'img1',code,"22")
    productManager.addProduct(id,'Producto3',"description3","$66",'img1',code,"22")
    
    
    let jsonData = JSON.stringify(products);
    
    
    fs.writeFile("./data/products.json", jsonData, (error) => {
        if (error) {
            console.log(`Error: ${error}`);
        } else {
            console.log("Archivo JSON creado correctamente");
            
        }
  });

let data=products


module.exports = ProductManager 