import reactSVG from './logo.svg';
import angularSVG from "./angular.svg";
import './App.css';

const lib = {
  react : {
    name:"React",
    link:"https://reactjs.org",
    logo: reactSVG
  },
  angular: {
    name:"Angular",
    link:"https://angular.io",
    logo: angularSVG
  }
}

function Component(props) {
  return (
    <>
    <img src={props.logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <a
          className="App-link"
          href={props.link}
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
        <Component {...lib.react}/>
      </header>
    </div>
  );
}

export default App;
