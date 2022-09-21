import React, {useState}  from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {
    const [id, setId] = useState("")
    const [category, setCategory] = useState("")
    const navigate = useNavigate();

    const handleOnSubmit =(e) =>{
        e.preventDefault()
        navigate(`/${category}/${id}`)
        if(!e.target.value){ 
            setCategory("")
            setId("")
        }
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <select 
                    name="category" 
                    value={category} 
                    onChange = { e => setCategory(e.target.value)}>
                    <option>Choose a Category</option>
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                    <option value="starship">Starship</option>
                </select>
                <input 
                    type="text" 
                    name="id" 
                    value={id} 
                    onChange = {(e) => setId(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default Form