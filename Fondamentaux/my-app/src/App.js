import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return (
    <>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {props.name}
        </a>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="Angular mon reuf"/>
      </header>
    </div>
  );
}

export default App;
