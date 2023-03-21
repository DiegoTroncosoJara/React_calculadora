import React from 'react';
import '../styles/Boton.css';

function Boton (props) {

  const esOperador = valor => {
    // isNaN: funcion que ve si una cadena no es un numero
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

  return (
    <div
      // trimEnd elimina espacios al final
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={ () => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;