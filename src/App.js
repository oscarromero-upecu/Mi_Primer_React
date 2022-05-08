import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes
import MiComponente from './components/MiComponente';

function Saludo(nombre){
  var presentacion = 
  (
  <div >
  <h2> Te saluda {nombre}</h2>
  <h3>Vamos a empezar</h3>
  </div>
  );
 return presentacion;
}

function App() {
var nombre = "Oscar Romero";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es mi primera React.
        </p>

        {Saludo (nombre)}

        <section className="componentes">
        <MiComponente />
        </section>

      </header>
     
    </div>
  );
}

export default App;

/* 
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> 
*/