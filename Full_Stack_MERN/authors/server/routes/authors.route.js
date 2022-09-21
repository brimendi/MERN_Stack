const AuthorController = require("../controllers/authors.controllers") //import from controller file
const Author = require("../models/authors.model") //import from models file

//express routes
module.exports = (app) => {
    app.get("/api/test", AuthorController.testApi)
    app.get("/api/authors", AuthorController.getAll)
    app.get("/api/authors/:id", AuthorController.getOne)
    app.post("/api/authors", AuthorController.addAuthor)
    app.put("/api/authors/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
}