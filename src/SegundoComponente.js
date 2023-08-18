import React from 'react'

 const SegundoComponente = () => {

    const libros = ['hp','gt','batman'];

  return (
    <div className="segundo-componente">
        <h1>listado de libros</h1>
        <ul>
            {
                libros.map((libro, indice) => {
                return <li key={indice}>{libro}</li>;
                })
            }
            </ul>

    </div>
  )
}
export default SegundoComponente;