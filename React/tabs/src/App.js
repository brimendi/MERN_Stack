import './App.css';
import Tabs from './components/Tabs';


function App() {
  return (
    <div className="App"
    style={{
      height: '100px',
      width: '300px',
      border: '2px, solid, black'
    }}
    >
      <Tabs tabs={[
        {tabName: "Tab 1", tabText: "Tab 1 content is showing here"},
        {tabName: "Tab 2", tabText: "Tab 2 content is showing here"},
        {tabName: "Tab 3", tabText: "Tab 3 content is showing here"},
    ]}/>
    </div>
  );
}

export default App;