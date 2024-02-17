import React from "react";
import'../css/Boton.css';

function Boton({texto, esBotonClick, manejarClick}){
    return(
        <button className={esBotonClick ? 'boton-click' : 'bototon-reiniciar'}
        onClick={manejarClick}>
            {texto}

        </button>
    )
}
export default Boton;