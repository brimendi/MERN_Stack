const Joke = require("./../models/jokes.model") // import model from models file

module.exports.testApi = (req, res) => {
    res.json({Status: "ok"})
}

//get all  
module.exports.getAll = (req, res) => {
    Joke.find() //function to get all 
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err))
}

//get one + create = update 
module.exports.updateJoke = (req, res) => {
    const paramsId = req.params.id //grabbing one joke using id {get one}
    const updateJoke = req.body //what is being updated "body"  
    Joke.findOneAndUpdate( //function to actually update joke
        {id: paramsId}, //criteria
        updateJoke, //update info
        {new: true, runsValidators: true} // new: true --> return the updated object //runValidation --> to run validation
    )
        .then(updateJoke => res.json(updateJoke)) 
        .catch(err => res.json(err))
}

// add one
module.exports.addJoke = (req, res) => {
    const newJoke = req.body //what is being added
    Joke.create(newJoke) //function to create a new joke 
        .then(joke => res.json(joke))
        .catch(err => res.json(err))

}

//get one 
module.exports.getOne = (req, res) => {
    const paramsId = req.params.id //requires id to grab one joke
    Joke.findOne({_id : paramsId}) // find one joke using id function 
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

//delete one
module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete({_id: req.params.id}) //delete by id 
    .then(deleteJoke => res.json(deleteJoke))
    .catch(err => res.json(err))
}
