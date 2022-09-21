import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CreateProduct from './CreateProduct'

const Dashboard = (props) => {
    const [productList, setProductList] = useState([])

    useEffect(()=>{
    axios.get(`http://localhost:8000/api/products`)
        .then(res=>{
        // console.log(res.data)
        setProductList(res.data)
        })
        .catch(err=>console.log(err))
    },[props])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/product/${deleteId}`)
        .then(res=>{
            const filterList = productList.filter((product)=>product._id !== deleteId)
            setProductList(filterList)
            console.log("deleted product", res.data)
            })
            .catch(err=>console.log(err))
        }

    return (
    <div>
        <CreateProduct/>
        <h1>All Products:</h1>
        {
            productList.map( (product, _id) => {
                return (
                    <div key={_id} >
                        <div >
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                            <Link className="btn btn-primary" to={`/product/edit/${product._id}`}> Edit</Link>
                            <button className='btn btn-danger' onClick={() => handleDelete(product._id)}> Delete</button>
                        </div>
                    </div>
                );
            })
        }
    </div>
    )
}

export default Dashboard