//Importar modulos de react / dependencias
import { React, Fragment } from "react";

//funciones del componente
const MiComponente = () =>{

    let nombre = "chuy";
    let web = "chuy.es";

    let usuario ={
        nombre:"jesus",
        apellido:"mejia",
        web:"chuy web"

    }

    

    //console.log(usuario);

    return (
    <Fragment>
       
        <h2>componente creado</h2>
        <h3>Datos del usuario</h3>
        <ul>
            <li>
            nombre :  <strong>{usuario.nombre}</strong>  
            </li>
            <li>
                web : <strong>{usuario.web}</strong>
            </li>
            <li>
            apellido : <strong>{usuario.apellido}</strong>
            </li>
        </ul>
        <p>Este es mi primer componente</p>
        
        <ul>
            <li>node</li>
            <li>js</li>
            <li>vue</li>
        </ul>
    </Fragment>
    
    
    );


}



//exportar el componente

export default MiComponente;