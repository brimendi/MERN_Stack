import React, {useState} from 'react'

const AddBox = (props) => {
    const [boxColorSize, setBoxColorSize] = useState("")

    const handleChange = (e) => {
        setBoxColorSize({
            ...boxColorSize, 
            [e.target.name]: e.target.value
        })
    }

    const handleAddBox = (e) => {
        e.preventDefault();
        props.setBoxes(boxes => [...boxes,{"color": boxColorSize.color, "height":boxColorSize.height, "width": boxColorSize.width}]);
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleAddBox}>
                <label htmlFor="color">Color:</label>
                <input type="text" name="color"onChange={handleChange} />
                <label htmlFor="height">Height:</label>
                <input onChange={ handleChange } type="number" name="height" />
                <label htmlFor="width">Width:</label>
                <input onChange={ handleChange } type="number" name="width" />
                <button value="color">Add</button>
            </form>
        </div>
    )
}

export default AddBox