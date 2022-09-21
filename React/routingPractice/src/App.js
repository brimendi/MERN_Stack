import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import RoutingPractice from './components/RoutingPractice';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Routes>
      <Route path="/:variable" element={<RoutingPractice />}/>
        <Route path="/:variable/:colo" element={<RoutingPractice />}/>
        <Route path="/:variable/:color/:backgroundColor" element={<RoutingPractice />}/>
      </Routes>
    </div>
  );
}

export default App;