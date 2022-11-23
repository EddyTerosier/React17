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
      id:"uuid",
      lib: "React",
      link:"https://fr.reactjs.org"
    },
    {
      id:"uuid",
      lib: "Angular",
      link: "https://angular.io"
    },
    {
      id:"uuid",
      lib: "Vue",
      link: "https://vuejs.org"
    }
  ];
  const [librairies, setLibrairies] = useState(array);
  const [value, setValue] = useState(null);
  const handleOnSubmit = e => {
    e.preventDefault();
    setLibrairies([...librairies, useEffect])
  }
  const handleOnChange = e => setValue(e.target.value);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleOnSubmit}>
        <input type="texte" onChange={handleOnChange}/>
        </form>
        {array.map((item) => {
          return<Library key={item.link} {...item}/>
        })}
      </header>
    </div>
  );
}

export default App;
