import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Contador from './components/Contador';
import adidasLogo from './images/logo.jpg'

function App() {

  const [numClics, setnumClics] = useState(0);

  const manejarClic = () => setnumClics(numClics + 1);

  const reiniciarClic = () => setnumClics(0);


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={adidasLogo} alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Button
          texto="Clic"
          esBotonClic={true}
          manejarClic={manejarClic} />
        <Button
          texto="Reinciar"
          esBotonClic={false}
          manejarClic={reiniciarClic} />
      </div>
    </div>
  );
}

export default App;
