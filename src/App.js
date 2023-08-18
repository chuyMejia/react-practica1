import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Edit <code>src/App.js</code> hola.


        </p>
        <SegundoComponente></SegundoComponente>
        <hr/>
        <MiComponente></MiComponente>
       
        

      </header>
      {/*cargar mi componete*/}
      
    </div>
  );
}

export default App;
