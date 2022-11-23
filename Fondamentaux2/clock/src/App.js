import logo from './logo.svg';
import {useEffect, useState} from "react"
import './App.css';

function Clock(props) {
  return (
    <>
      <p>{`${props.date}`}</p>
    </>
  )
}

function App() {
  const [date,setDate] = useState(new Date());
  useEffect(()=>{
    setInterval(() => {
      setDate(new Date())
    }, 1000);
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock date={date}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setDate(new Date())}>Show date</button>
      </header>
    </div>
  );
}

export default App;
