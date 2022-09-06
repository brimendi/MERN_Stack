import React, { useState } from 'react';
import Form from './components/Form';
import ToDos from './components/ToDos';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Form 
        list={list} 
        setList={setList} 
      />
      <div>
        {list.map((toDo, index) => (
          <ToDos 
            toDo={toDo} 
            index={index} 
            setList={setList} 
            list={list} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;