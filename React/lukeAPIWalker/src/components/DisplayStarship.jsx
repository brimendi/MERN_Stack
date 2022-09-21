import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const DisplayStarship = () => {
    const [starship, setStarship] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response => setStarship(response.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            {
                starship ?
                    <>
                        <h1>{starship.name}</h1>
                        <p><b>Model: </b>{starship.model}</p>
                        <p><b>Manufacturer: </b>{starship.manufacturer}</p>
                        <p><b>Length: </b>{starship.length}</p>
                        <p><b>Max Atmosphering Speed: </b>{starship.max_atmosphering_speed}</p>
                    </> :
                    <h1>No Starship Requested</h1>
            }
        </>
    )
}

export default DisplayStarship


