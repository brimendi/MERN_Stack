import React, {useState} from 'react';

const Form = (props) => {
    const { list, setList } = props;
    const [input, setInput] = useState("");

    let toDo = {
        name: input,
        done: false
    };

    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setList([...list, toDo]);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
            <h1>ToDo List:</h1>
            <input
                type="text"
                name="toDo"
                value={input}
                onChange={handleOnChange} 
            />
            <button> Add a Task </button>
            </form>
        </div>
    )
}

export default Form;