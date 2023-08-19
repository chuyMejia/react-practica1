import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import  TercerComponente  from './TercerComponente';
import EventosComponente from './EventosComponente';

function App() {
  const ficha_medica ={
    altura:"187cm",
    alergia:"N/A",
    salud:"buena"
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Edit <code>src/App.js</code> hola.

        
        </p>
        <EventosComponente></EventosComponente>
        <hr/>
        <TercerComponente  ficha={ficha_medica}></TercerComponente>
        <hr/>
        <SegundoComponente></SegundoComponente>
        <hr/>
        <MiComponente></MiComponente>
       
        

      </header>
      {/*cargar mi componete*/}
      
    </div>
  );
}


export default App;
