const {Pet} = require("../models/pet.model") // import model from models file

module.exports.testApi = (req, res) => {
    res.json({Status: "ok"})
}
module.exports.getAll = (req, res) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => res.status(400).json(err))//status 400 to show errors on console
}

//get one + create
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true} //must have runvalidators for update
    )
        .then(updatedPet=>res.json(updatedPet))
        .catch(err => res.status(400).json(err ));}

module.exports.addPet = (req, res) => {
    const newPet = req.body
    Pet.create(newPet)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))

}

module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Pet.findOne({_id : paramsId})
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.findOneAndDelete({_id: req.params.id})
    .then(deletePet=> res.json(deletePet))
    .catch(err => res.status(400).json(err))
}
