import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, Link, useNavigate} from "react-router-dom"

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
    axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response=>{
        console.log(response.data)
        setProduct(response.data)
        })
        .catch(err=> console.log(err))
    }, [])

    const handleDelete =()=>{
    axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(response=>navigate(`/`))
        .catch(err=> console.log(err))
    }

    return (
        <div>
            {
            product?
            <div>
            <h3> Title: {product.title}</h3>
            <h3> Price: {product.price}</h3>
            <h3> Description: {product.description}</h3>
            </div>:
            <h1> There is not a product that matches that ID</h1>
        }
            
        <Link className="btn btn-primary" to={`/product/edit/${id}`}> Edit</Link>
        <button onClick={handleDelete} className="btn btn-danger">Delete </button>
        </div>
    )
}

export default ProductDetails