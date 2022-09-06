import logo from './logo.svg';
import './App.css';
import PersonCards from './components/PersonCards';


function App() {
  return (
    <div className="App">
      <birthdayCounter />
      <PersonCards 
        lastName="Doe" 
        firstName="Jane" 
        age={45} 
        hairColor="Black"
      />
      <PersonCards 
        lastName="Smith" 
        firstName="John" 
        age={88} 
        hairColor="Brown"
      />
      <PersonCards 
        lastName="Fillmore" 
        firstName="Millard" 
        age={50} 
        hairColor="Brown"
      />
      <PersonCards 
        lastName="Smith" 
        firstName="Maria" 
        age={62} 
        hairColor="Brown"
      />
    </div>
  );
}

export default App;
