import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function TodayDate(props) {
  const [date, setDate] = useState(`${new Date()}`);
  const update = () => {
    setDate(`${new Date()}`);
  };
  return(
    <>
    <p>{props.isVisible && date}</p>
      <button onClick={update}>MAJ date</button><br/>
    </>
  )
}

function App() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodayDate isVisible={visible}/>
        {visible &&<button onClick={toggleVisibility}>hide</button>}
        {!visible &&<button onClick={toggleVisibility}>show</button>}
      </header>
    </div>
  );
}

export default App;
