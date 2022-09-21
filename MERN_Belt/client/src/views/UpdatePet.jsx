import React, { useEffect,useState } from 'react'
import axios from "axios"
import {useParams, useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"

const UpdatePet = () => {
const navigate =useNavigate()
const {id} = useParams()
const [pet, setPet] = useState("")
const [name, setName] = useState("")
const [type, setType] = useState("")
const [description, setDescription] = useState("")
const [skill1, setSkill1] = useState("")
const [skill2, setSkill2] = useState("")
const [skill3, setSkill3] = useState("")

const [errors, setErrors] = useState([])



useEffect(()=>{
    // get the job information from API 
    axios.get(`http://localhost:8000/api/pets/${id}`) // same route as DetailPage
    .then(response=>{
        console.log(response.data)
        setPet(response.data)
        const pet = response.data
        setName(pet.name)
        setType(pet.type)
        setDescription(pet.description)
        setSkill1(pet.skill1)
        setSkill2(pet.skill2)
        setSkill3(pet.skill3)
    })
    .catch(err=> console.log(err))
}, [])

//update with errors logic
const handleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/pets/${id}`, {name:name, type:type, description:description, skill1:skill1, skill2:skill2, skill3:skill3})
    .then(response=>navigate(`/`))
    .catch(err=>{
        const errorResponseDataErrors = err.response.data //.data not .data.errors depending on arr in cosole
        const errMsgArr =[]
        for(const eachKey in errorResponseDataErrors){
            errMsgArr.push(errorResponseDataErrors[eachKey].message)
        }
        setErrors(errMsgArr)
    })
    }


return (
    <div>
        <Link to="/">Home</Link> 
        <h1>Pet Shelter</h1>
        <h3>Edit {pet.name}</h3>
    <form onSubmit={handleSubmit}>
        <div>
            <label className="form-label"> Name</label>
            <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
            <label className="form-label"> Type</label>
            <input type="text" className="form-control" name="type" onChange={(e) => setType(e.target.value)} value={type} />
        </div>
        <div>
            <label className="form-label"> Description</label>
            <input type="text" className="form-control" name="details" onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>
        <div>
            <h4>Skills (optional)</h4>
            <label className="form-label"> Skill 1:</label>
            <input type="text" className="form-control" name="skill1" onChange={(e) => setSkill1(e.target.value)} value={pet.skill1} />
            <label className="form-label"> Skill 2:</label>
            <input type="text" className="form-control" name="skill2" onChange={(e) => setSkill2(e.target.value)} value={pet.skill2} />
            <label className="form-label"> Skill 3:</label>
            <input type="text" className="form-control" name="skill3" onChange={(e) => setSkill3(e.target.value)} value={pet.skill3} />
        </div>
        <button type="submit" className='btn btn-success'> Edit {pet.name}</button>
    </form>
    {
            errors.map((eachErr, i)=>(
            <p key={i} style={{color: "red"}}> {eachErr} </p>
            ))
        }
    </div>
)
}

export default UpdatePet