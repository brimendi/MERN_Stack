import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashboard = () => {
    const [petList, setPetList] = useState([])


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets`)
        .then(response=>{
            console.log(response.data)
            setPetList(response.data)
        })
        .catch(err=>console.log(err))
    },[])

        return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home</h3>
            <Link to="/pets/new">Add a pet to the shelter</Link>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th> Name</th>
                    <th> Type</th>
                    <th colSpan={3}> Actions</th>
                </tr>
            </thead>
            <tbody>
            {
            petList.map((eachPet, i)=>{
            return(
                <tr key={i}>
                <td>{eachPet.name}</td>
                <td>{eachPet.type}</td>
                <td>  <Link to={`/pets/${eachPet._id}`} className="btn btn-primary">Details</Link></td>
                <td> <Link to={`/edit/${eachPet._id}`} className="btn btn-primary">Edit</Link></td>
                </tr>
                )
                })
            }
            
            </tbody>
        </table>
        </div>
    )
}

export default Dashboard