import React from 'react'

 const EventosComponente = () => {

    const darclick = (param,context) =>{
            alert('dio click '+param);
            console.log(context);
    }

    function dobleClick(e){

        alert('has dado doble click');

    }

    const hasentado = (param) =>{
        console.log("tu has "+param);
    }

    const estasDentro = (e) =>{

        console.log('ypur in');
    }


    const estasFeuera = (e) =>{

        console.log('ypur out');
    }

  return (
    <div>
        <h1>Eventos en react</h1>

        <p>
        {/*Evento click*/}
        <button onClick={()=>darclick("chuy",this)}>da click</button>
        </p>
        <p>
        {/*Evento doble  click*/}
        <button onDoubleClick={dobleClick}>da doble click</button>
        </p>
        {/*Evento onMouseEnter y onMouseLeave*/ }
        <div id = "caja" onMouseEnter={e =>hasentado('entrado')}
                        onMouseLeave={e =>hasentado('salido')}>
            entra y sal
        </div>
        {/*evento focus y blur*/}
        <input type="text" placeholder='mete tu nombre'  onFocus={estasDentro}
                                                         onBlur={estasFeuera}   />        

    </div>
  )
}


export default EventosComponente;