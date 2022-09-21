import logo from './logo.svg';
import './App.css';
import DisplayPerson from './components/DisplayPerson';
import DisplayPlanet from './components/DisplayPlanet';
import DisplayStarship from './components/DisplayStarship';
import Form from './components/Form';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
          <Route path="/people/:id" element={<DisplayPerson />} />
          <Route path="/planet/:id" element={<DisplayPlanet />} />
          <Route path="/starship/:id" element={<DisplayStarship />} />
      </Routes>
    </div>
  );
}

export default App;
