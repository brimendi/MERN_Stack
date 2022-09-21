import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const EditProduct = () => {
    const navigate =useNavigate()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response=>{
            console.log(response.data)
            const product = response.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
            })
            .catch(err=> console.log(err))
        }, [])

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`,{
            title: title,
            price: price,
            description : description
        })
        .then(response => navigate(`/product/${id}`))
        .catch( (err) => console.error(err))
    }

    return (
    <div className="container text-center">
        <h3> Edit Product</h3>
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
                <button type="submit" className='btn btn-success'> Update</button>
            </form>
    </div>
    )};

export default EditProduct;