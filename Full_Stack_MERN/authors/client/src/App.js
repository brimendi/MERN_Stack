import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import AddAuthor from './views/AddAuthor';
import UpdateAuthor from './views/UpdateAuthor'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/authors/new' element={<AddAuthor/>}/>
        <Route path='/edit/:id' element={<UpdateAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
