const {Author} = require("../models/authors.model") // import model from models file

module.exports.testApi = (req, res) => {
    res.json({Status: "ok"})
}
module.exports.getAll = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err))//status 400 to show errors on console
}

//get one + create
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true} //must have runvalidators for update
    )
        .then(updatedAuthor=>res.json(updatedAuthor))
        .catch(err => res.status(400).json(err ));}

module.exports.addAuthor = (req, res) => {
    const newAuthor = req.body
    Author.create(newAuthor)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))

}

module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Author.findOne({_id : paramsId})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete({_id: req.params.id})
    .then(deleteAuthor => res.json(deleteAuthor))
    .catch(err => res.status(400).json(err))
}
