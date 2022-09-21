const JokeController = require("../controllers/jokes.controller") //import from controller file
const Joke = require("../models/jokes.model") //import from models file

//express routes for Create Remove Update Delete 
module.exports = (app) => {
    app.get("/api/test", JokeController.testApi)
    app.get("/api/jokes", JokeController.getAll)
    app.get("/api/jokes/:id", JokeController.getOne) // get for getting one or all 
    app.post("/api/jokes", JokeController.addJoke) //post for adding new info in 
    app.put("/api/jokes/:id", JokeController.updateJoke) //put for updates 
    app.delete("/api/jokes/:id", JokeController.deleteJoke) //delete for deleting
}