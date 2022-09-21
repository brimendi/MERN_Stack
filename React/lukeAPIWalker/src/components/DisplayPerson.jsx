import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const DisplayPerson = () => {
    const [people, setPeople] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setPeople(response.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            {
                people ?
                    <>
                        <h1>{people.name}</h1>
                        <p><b>Height: </b>{people.height}</p>
                        <p><b>Mass: </b>{people.mass}</p>
                        <p><b>Hair color: </b>{people.hair_color}</p>
                        <p><b>Skin color: </b>{people.skin_color}</p>
                    </> :
                    <h1>These are not the droids you're looking for</h1>
            }
        </>
    )
}

export default DisplayPerson