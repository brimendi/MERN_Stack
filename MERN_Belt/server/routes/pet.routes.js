const PetController = require("../controllers/pet.controller") //import from controller file

//express routes
module.exports = (app) => {
    app.get("/api/test", PetController.testApi)
    app.get("/api/pets", PetController.getAll)
    app.get("/api/pets/:id", PetController.getOne)
    app.post("/api/pets", PetController.addPet)
    app.put("/api/pets/:id", PetController.updatePet)
    app.delete("/api/pets/:id", PetController.deletePet)
}