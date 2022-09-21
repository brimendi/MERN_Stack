import React, { useState } from 'react' 
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"


// 1. form input : useState for each field
// 2. handle submit
// 3. send info to api: axios
// 4. navigate

const AddPet = () => { 
    const navigate =useNavigate() 
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")

    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // send all details to API
        // console.log(name);
        axios.post(`http://localhost:8000/api/pets`, {name:name, type:type, description:description, skill1:skill1, skill2:skill2, skill3:skill3}) //name is the only parameter we're working with
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
        <Link to="/">back to Home</Link> 
        <h3>Know a pet needing a home?</h3>
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
                <input type="text" className="form-control" name="skill1" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
                <label className="form-label"> Skill 2:</label>
                <input type="text" className="form-control" name="skill2" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
                <label className="form-label"> Skill 3:</label>
                <input type="text" className="form-control" name="skill3" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
            </div>

            <button type="submit" className='btn btn-success'> Add a Pet</button>
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

export default AddPet