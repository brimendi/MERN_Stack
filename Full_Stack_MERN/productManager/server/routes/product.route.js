const ProductController = require(".././controllers/product.controller") //import from controller file
const Product = require("../models/product.model") //import from models file

//express routes
module.exports = (app) => {
    app.get("/api/test", ProductController.testApi)
    app.get("/api/products", ProductController.getAll)
    app.get("/api/product/:id", ProductController.getOne)
    app.post("/api/product", ProductController.addProduct)
    app.put("/api/product/:id", ProductController.updateProduct)
    app.delete("/api/product/:id", ProductController.deleteProduct)
}