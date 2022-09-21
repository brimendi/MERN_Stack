import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashboard = () => {
    const [authorList, setAuthorList] = useState([])


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors`)
        .then(response=>{
            console.log(response.data)
            setAuthorList(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    
    //delete button function 
    const handleDelete =(deleteId)=>{ 
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(response=>{
            const filterList = authorList.filter((author) => author._id !== deleteId) //filters to list only existing authors
            setAuthorList(filterList)
            })
            .catch(err=>console.log(err))
        }

        return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/authors/new">Add an author</Link>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th> Author</th>
                    <th colSpan={3}> Actions Available</th>
                </tr>
            </thead>
            <tbody>
            {
            authorList.map((eachAuthor, i)=>{
            return(
                <tr key={i}>
                <td>{eachAuthor.name}</td>
                <td> <Link to={`/edit/${eachAuthor._id}`} className="btn btn-primary">Edit</Link></td>
                <td> <button onClick={()=>handleDelete(eachAuthor._id)} className="btn btn-danger"> Delete</button></td>
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