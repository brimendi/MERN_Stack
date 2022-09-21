import React, {useState} from 'react'
import Display from './Display'

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
            <Display submittedName={confirmedName} />
        </div>
    )
}

export default FetchPoke