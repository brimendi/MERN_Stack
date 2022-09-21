import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const DisplayPlanet = () => {
    const [planet, setPlanet] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            {
                planet ?
                    <>
                        <h1>{planet.name}</h1>
                        <p><b>Climate: </b>{planet.climate}</p>
                        <p><b>Terrain: </b>{planet.terrain}</p>
                        <p><b>Population: </b>{planet.population}</p>
                        <p><b>Surface Water: </b>{planet.surface_water = 1 ? 'True': 'False'}</p>
                    </> :
                    <h1>No Planet Requested</h1>
            }
        </>
    )
}

export default DisplayPlanet