import React, { useEffect,useState } from 'react'
import axios from "axios"
import {useParams, useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"

const UpdateAuthor = () => {
const navigate =useNavigate()
const {id} = useParams()
const [name, setName] = useState("")

const [errors, setErrors] = useState([])

useEffect(()=>{
    // get the job information from API 
    axios.get(`http://localhost:8000/api/authors/${id}`) // same route as DetailPage
    .then(response=>{
        console.log(response.data)
        const author = response.data
        setName(author.name)
    })
    .catch(err=> console.log(err))
}, [])

//update with errors logic
const handleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/authors/${id}`, {name})
    .then(response=>navigate(`/`))
    .catch(err=>{
        const errorResponseDataErrors = err.response.data //.data not .data.errors depending on arr in cosole
        const errMsgArr =[]
        console.log(err);
        for(const eachKey in errorResponseDataErrors){
            errMsgArr.push(errorResponseDataErrors[eachKey].message)
        }
        setErrors(errMsgArr)
    })
    }


return (
    <div>
        <Link to="/">Home</Link> 
    <form onSubmit={handleSubmit}>
        <div>
            <label className="form-label"> Name</label>
            <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <button type="submit" className='btn btn-success'> Update</button>
    </form>
    {
            errors.map((eachErr, i)=>(
            <p key={i} style={{color: "red"}}> {eachErr} </p>
            ))
        }
    </div>
)
}

export default UpdateAuthor