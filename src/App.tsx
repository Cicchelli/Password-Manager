import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Titulo from './components/Titulo';

type FormDefaultValues = {
  nomeDoServiço: string,
  login: string,
  senha: string,
  URL: string,
};

function App() {
  const [renderForm, setRenderForm] = useState(false);
  function handleRenderForm() {
    setRenderForm(true);
  }
  function handleClearForm() {
    setRenderForm(false);
  }
  return (
    <div>
      <Titulo />
      {
        renderForm && (<Form handleClearForm={ () => handleClearForm() } />)
      }
      {
      !renderForm && (
        <button onClick={ handleRenderForm }>
          Cadastrar nova senha
        </button>
      )
      }
    </div>
  );
}

export default App;
