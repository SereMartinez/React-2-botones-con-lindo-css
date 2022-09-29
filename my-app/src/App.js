import logo from './logo.svg';
import './App.css';
import MyButton from './Components/boton.js/boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton text="Hola! Soy un botón OwO"/>
        <MyButton text="Hola! Yo también lo soy"/>
  
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;

