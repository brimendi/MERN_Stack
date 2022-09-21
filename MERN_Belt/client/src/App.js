import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import PetDetails from './views/PetDetails'
import AddPet from './views/AddPet'
import UpdatePet from './views/UpdatePet'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/pets/:id' element={<PetDetails/>}/>
        <Route path='/pets/new' element={<AddPet/>}/>
        <Route path='/edit/:id' element={<UpdatePet/>}/>
      </Routes>
    </div>
  );
}

export default App;
