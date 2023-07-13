import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Form from './components/Form';
import Titulo from './components/Titulo';
import { TargetType, FormDefaultValuesType, FormDefaultValuesTypewithid }
  from './components/Types';

const formDefaultValues = {
  nomeDoServico: '',
  login: '',
  senha: '',
  url: '',
};
function App() {
  const [renderForm, setRenderForm] = useState(false);
  const [estadoInicial, setEstadoInicial] = useState(formDefaultValues);
  const [formSend, setFormSend] = useState<FormDefaultValuesTypewithid[]>([]);
  const [initialDisplay, setinitialDisplay] = useState(true);
  function handleRenderForm() {
    setRenderForm(true);
  }
  function handleClearForm() {
    setRenderForm(false);
  }
  function handleChange(
    event: TargetType,
  ) {
    const { name, value } = event.target;
    setEstadoInicial({
      ...estadoInicial,
      [name]: value,
    });
  }
  function sendFormFunction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSend(
      [...formSend, { ...estadoInicial, id: uuid() }],
    );
    setinitialDisplay(false);
    setEstadoInicial(formDefaultValues);
    setRenderForm(false);
  }
  function erase(login: string) {
    setFormSend(
      formSend.filter((info) => info.login !== login),
    );
  }
  return (
    <div>
      <Titulo />
      {
        renderForm && (<Form
          estadoInicial={ estadoInicial }
          handleClearForm={ () => handleClearForm() }
          handleChange={ (event: TargetType) => handleChange(event) }
          sendFormFunction={
            (event: React.FormEvent<HTMLFormElement>) => sendFormFunction(event)
}
        />)
      }
      {
        formSend.length === 0 && (<p>Nenhuma senha cadastrada</p>)
      }
      {
        formSend.length > 0 && (
          formSend.map(({ nomeDoServico, login, senha, url }) => (
            <div key={ nomeDoServico }>
              <a href={ url }>{ nomeDoServico }</a>
              <p>{ login }</p>
              <p>{ senha }</p>
              <button
                onClick={ () => erase(login) }
                data-testid="remove-btn"
              >
                {' '}
                Apagar

              </button>
            </div>
          ))
        )
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
