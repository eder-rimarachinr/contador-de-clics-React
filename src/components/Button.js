import React from 'react';
import '../hojas-de-estilos/Button.css'

function Button({ texto, esBotonClic, manejarClic }) {
  return (
    <button className={esBotonClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Button