// import React, {useState, useEffect} from 'react'
// import Display from '../components/Display'
// import axios from 'axios'
// import DisplayOnLoad from '../components/DisplayOnLoad';

// const FetchAPI = () => {
//     const [pokemon, setPokemon] = useState();

//     // const fetchPokemon = () => {
//     //     fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//     //     .then(response => {
//     //         console.log(response)
//     //         return response.json();
//     //     })//successful call 
//     //     .then(jsonResponse => {
//     //         console.log(jsonResponse)
//     //         setPokemon(jsonResponse)
//     //     })
//     //     .catch(err => console.log(err)) //unsuccessful call
//     // }

//     // const fetchPokemon = async() => { // ASYNC/AWAIT
//     //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//     //     const jsonResponse = await response.json()
//     //     console.log(jsonResponse)
//     //     setPokemon(jsonResponse)
//     // }

//     // const fetchPokemon = () => { //WITH AXIOS
//     //     axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
//     //         .then(response => {
//     //             console.log(response.data)
//     //             setPokemon(response.data)
//     //         })
//     //         .catch()
//     // }

//     useEffect(() => { //AXIOS WITH ASYNC
//         axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
//         .then(response => {
//             console.log("calling API")
//             setPokemon(response.data)
//         })
//         .catch()
// })
    
//     return (
//         <>
//             <h1>Fetch Pokemon</h1>
//             <button onClick = {FetchAPI}>Fetch</button>
//                 {
//                     <DisplayOnLoad/>
//                 }
//         </>
//         )
//     }

// export default Display


import React, {useState} from 'react'
import DisplayPoke from './DisplayPoke'

const FetchPoke = () => {
    const [pokemonName, setPokemonName] = useState("pikachu")
    const [confirmedName, setConfirmedName] = useState("pikachu")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setConfirmedName(pokemonName)
    }
    return (
        <div>
            <h1>Pokemon challenge </h1>
            <form onSubmit = {handleSubmit}>
                <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <DisplayPoke submittedName={confirmedName} />
        </div>
    )
}

export default FetchPoke