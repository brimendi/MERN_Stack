import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, Link, useNavigate} from "react-router-dom"

const PetDetails = () => {
    const {id} = useParams()
    const [pet, setPet] = useState("")

    const navigate = useNavigate()

    useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(response=>{
        console.log(response.data)
        setPet(response.data)
        })
        .catch(err=> console.log(err))
    }, [])

    const handleDelete =()=>{
    axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(response=>navigate(`/`))
        .catch(err=> console.log(err))
    }

    return (
        <div>
        <Link to="/">back to Home</Link> 
        <h1>Pet Shelter</h1>
        <h3>Details about: {pet.name}</h3>
        <h3> Name: {pet.name}</h3>
        <h3> Type: {pet.type}</h3>
        <h3> Description: {pet.description}</h3>
        <h3>Skills</h3>
        <p>{ pet.skill1 }</p>
        <p> { pet.skill2 }</p>
        <p> { pet.skill3 }</p>
        <button onClick={handleDelete} className="btn btn-danger">Adopt {pet.name} </button>
        </div>
    )
}

export default PetDetails