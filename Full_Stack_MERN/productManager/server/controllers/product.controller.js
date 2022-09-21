const Product = require("../models/product.model") // import model from models file

module.exports.testApi = (req, res) => {
    res.json({Status: "ok"})
}
module.exports.getAll = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}
//get one + create
module.exports.updateProduct = (req, res) => {
    const paramsId = req.params.id
    console.log(paramsId);
    const updateProduct = req.body
    Product.findOneAndUpdate(
        {_id: paramsId}, //criteria
        updateProduct, //update info
        {new: true, runsValidators: true} // new: true --> return the updated object //runValidation --> to run validation
    )
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.json(err))
}

module.exports.addProduct = (req, res) => {
    const newProduct = req.body
    Product.create(newProduct)
        .then(product => res.json(product))
        .catch(err => res.json(err))

}

module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Product.findOne({_id : paramsId})
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({_id: req.params.id})
    .then(deleteProduct => res.json(deleteProduct))
    .catch(err => res.json(err))
}
