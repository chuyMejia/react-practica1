import React from 'react'

 const SegundoComponente = () => {

    //const libros = ['hp','gt','batman'];
   const libros = [];
  return (
    <div className="segundo-componente">
        <h1>listado de libros</h1>
        {libros.length >= 1 ? 
        (<ul>
            {
                libros.map((libro, indice) => {
                return <li key={indice}>{libro}</li>;
                })
            }
            </ul>)
            :(<p>no hay libros</p>)
        }
    </div>
  )
}
export default SegundoComponente;