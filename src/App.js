import './App.css';
import GetUsername from './components/username';

const myName = "Kirran";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetUsername />
      </header>
    </div>
  );
}

export default App;
