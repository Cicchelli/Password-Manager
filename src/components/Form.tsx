import React, { useState } from 'react';

type FormProps = {
  handleClearForm: () => void
};

const formDefaultValues = {
  nomeDoServico: '',
  login: '',
  senha: '',
  URL: '',
};

function Form(props:FormProps) {
  const {
    handleClearForm,
  } = props;
  const [btnState, setbtnState] = useState(true);
  const [estadoInicial, setEstadoInicial] = useState(formDefaultValues);
  const { nomeDoServico, login, senha, URL } = estadoInicial;
  const validPass = 'valid-password-check';
  const invalidPass = 'invalid-password-check';
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setEstadoInicial({
      ...estadoInicial,
      [name]: value,
    });
  }
  function passwordStatus() {
    const specialChars = /\W|_/;
    if (nomeDoServico.length > 0
        && login.length > 0
        && senha.length > 8 && senha.length < 16
        && /\d/.test(senha)
        && specialChars.test(senha)
        && senha.match(/[a-zA-Z]/)) {
      setbtnState(false);
    } else {
      setbtnState(true);
    }
  }
  return (
    <div>
      <form onKeyUpCapture={ passwordStatus }>
        <label>
          Nome do serviço
          <input
            type="text"
            name="nomeDoServico"
            onChange={ handleChange }
            value={ nomeDoServico }
            required
          />
        </label>
        <label>
          Login
          <input
            type="text"
            name="login"
            onChange={ handleChange }
            value={ login }
            required
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            name="senha"
            onChange={ handleChange }
            value={ senha }
          />
        </label>
        <label>
          URL
          <input
            type="text"
            name="URL"
            onChange={ handleChange }
            value={ URL }
          />
        </label>
        <button disabled={ btnState }>Cadastrar</button>
        <button onClick={ handleClearForm }>Cancelar</button>
      </form>
      <p
        className={ senha.length >= 8 && senha.length <= 16
          ? validPass : invalidPass }
      >
        Possuir 8 ou mais caracteres
      </p>
      <p
        className={ senha.length <= 16
          ? validPass : invalidPass }
      >
        Possuir até 16 caracteres
      </p>
      <p
        className={ /\d/.test(senha)
          ? validPass : invalidPass }
      >
        Possuir letras e números

      </p>
      <p
        className={ /\W|_/.test(senha)
          ? validPass : invalidPass }
      >
        Possuir algum caractere especial
      </p>
    </div>
  );
}

export default Form;
