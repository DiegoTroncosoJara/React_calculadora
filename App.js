import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react'; 
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    // Si la cadena es 'vacía' por defecto es False.
    if (input){
      setInput(evaluate(input));
    } else {
      alert("Tienes que ingresar valores para hacer los cálculos.");
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        {/* <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de fcc'
        /> */}
        <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            {/* () => representa Event Listener */}
            <BotonClear manejarClear={ () => setInput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
