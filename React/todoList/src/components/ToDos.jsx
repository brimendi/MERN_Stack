import React from 'react';

const ToDo = (props) => {
    const { toDo, index, setList, list } = props;

    const handleOnClick = () => {
        setList(() => {
            return list.filter(toDo => list.indexOf(toDo) !== index)
        })
    }

    const handleOnChange = () => {
        list[index].done = !list[index].done;
        setList([...list]);

    }

    return (
        <div>
            {toDo.done ?
                <p>{toDo.name}</p>:
                <p>{toDo.name}</p>}
            <label htmlFor='done'>Done</label>
            <input 
                type="checkbox" 
                name="done" 
                onChange={handleOnChange} 
                checked={toDo.done} 
            />
            <button 
                onClick={handleOnClick}
            >
                Delete
            </button>
        </div>
    )
}

export default ToDo;