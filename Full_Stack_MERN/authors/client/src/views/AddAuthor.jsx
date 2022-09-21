import React, { useState } from 'react' 
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"


// 1. form input : useState for each field
// 2. handle submit
// 3. send info to api: axios
// 4. navigate

const CreateAuthor = () => { 
    const navigate =useNavigate() 
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // send all details to API
        console.log(name);
        axios.post(`http://localhost:8000/api/authors`, {name:name}) //name is the only parameter we're working with
        .then(response=>navigate("/"))
        .catch(err=>{ // error logic. making an array to push the iterated validation errors into for display  //data.errors depending on console arr names
            const errorResponseDataErrors = err.response.data.errors
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
        <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label"> Name</label>
                <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <Link to='/' className="btn btn-secondary">Cancel</Link>
            <button type="submit" className='btn btn-success'> Submit</button>
        </form>
        {/* errors .map to iterate through all of them for display  */}
        {
            errors.map((eachErr, i)=>(
            <p key={i} style={{color: "red"}}> {eachErr} </p> 
            ))
        }
        </div>
    )
    }

export default CreateAuthor