import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const CreateProduct = () => {
    const navigate =useNavigate()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const [errors, setErrors] = useState([])
    
    const handleSubmit = e => {
        axios.post("http://localhost:8000/api/product", {
            title: title,
            price: price,
            description : description
        })
        .then(res =>navigate("/"))
        .catch(err=>{
            const errorResponseDataErrors = err.response.data.errors
            const errMsgArr =[]
            for(const eachKey in errorResponseDataErrors){
                errMsgArr.push(errorResponseDataErrors[eachKey].message)
            }
            setErrors(errMsgArr)
        })
    }

    const clearForm = () =>{
        setTitle("")
        setPrice("")
        setDescription("")
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label"> Title</label>
                    <input type="text" className="form-control" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <label className="form-label"> Price</label>
                    <input type="text" className="form-control" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div>
                    <label className="form-label"> Description</label>
                    <input type="text" className="form-control" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <button type="submit" className='btn btn-success'> Create</button>
            </form>
    {
        errors.map((eachErr, i)=>(
        <p key={i} style={{color: "red"}}> {eachErr} </p>
        ))
    }
        </div>
    )
    }

export default CreateProduct