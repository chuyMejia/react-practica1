import React from 'react';
import PropTypes from 'prop-types';

 const TercerComponente = ({nombre,ficha,apellido}) => {
    
    //console.log(props);
  return (
    <div>
       <h1>Comunicacion entre componentes</h1> 
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.alergia}</li>
        </ul>
    </div>
  )
}


TercerComponente.protoTypes = {
    nombre:PropTypes.string.isRequired,
    apellido:PropTypes.string,
    ficha:PropTypes.object
}

TercerComponente.defaultProps ={
    nombre : "juan",
    apellido : "es chido"
  }
  

export default TercerComponente;
 