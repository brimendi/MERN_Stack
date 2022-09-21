import React, {useEffect, useState} from 'react'

const Display = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPoke = () => {
        useEffect (() =>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${props.submittedName}`)
            .then(response => {
                console.log("calling API")
                setPokemon(response.data)
            })
            .catch()
        }, [props.submittedName])
    }
    
    return (
        <div>
            <fetchPoke/>
        </div>
    )
}

export default Display