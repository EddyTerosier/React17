import logo from './logo.svg';
import './App.css';

function Library({lib, link}) {
  return (
    <a
          className="App-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {lib}
        </a>
  )
}


function App() {

  const array = [
    {
      lib: "React",
      link:"https://fr.reactjs.org"
    },
    {
      lib: "Angular",
      link: "https://angular.io"
    },
    {
      lib: "Vue",
      link: "https://vuejs.org"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {array.map(item => {
          return(<Library {...item}/>)
        })}
      </header>
    </div>
  );
}

export default App;
