import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayOnLoad = () => {
    const [pokemon, setPokemon] = useState();


    useEffect(() => {

        // .get -> read, .post -> creat, .put -> update, .delete -> delete
        axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response => {
                console.log("calling API")
                setPokemon(response.data)
            })
            .catch()
    }, [])

    return (

        <div>
            {
                pokemon ?
                    <>
                        <h1> {pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} />
                    </>:
                <h1> Loading...</h1>
            }
        </div>
    )
}

export default DisplayOnLoad