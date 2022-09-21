// import React, {useState, useEffect} from 'react'
// import axios from "axios"

// const ChallengeDisplay = (props) => {
//     const [pokemon, setPokemon] = useState();

//     useEffect(() => {
//         // .get -> read, .post -> creat, .put -> update, .delete -> delete
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${props.submittedName}`)
//             .then(response => {
//                 console.log("calling API")
//                 setPokemon(response.data)
//             })
//             .catch()
//     }, [props.submittedName])

//     return (

//         <div>
//             <h5> {props.submittedName}</h5>
//             {
//                 pokemon ?
//                     <>
//                         <h1> {pokemon.name}</h1>
//                         <img src={pokemon.sprites.front_default} />
//                     </>:
//                 <h1> Loading...</h1>
//             }
//         </div>
//     )
// }

// export default ChallengeDisplay
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DisplayPoke = (props) => {
    const [pokemon, setPokemon] = useState()

    useEffect (() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.submittedName}`)
        .then(response => {
            console.log("calling API")
            setPokemon(response.data)
        })
        .catch()
    }, [props.submittedName])

    return (
        <div>
            <h5>{props.submittedName}</h5>
            {
                pokemon?
                <div>
                    <h1> {pokemon.name} </h1>
                    <img src={pokemon.sprites.front_default} />
                    <img src={pokemon.sprites.back_default} />
                    <table style={{display: "flex", justifyContent: "center"}}>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Abilities</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>{pokemon.abilities[0].ability.name}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{pokemon.abilities[1].ability.name}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>:
                <h1>Searching the grass...</h1>
            }
        </div>
    )
}

export default DisplayPoke