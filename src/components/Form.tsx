import React, { useState } from 'react';
import { TargetType, FormDefaultValuesType } from './Types';

type FormProps = {
  handleClearForm: () => void,
  estadoInicial: FormDefaultValuesType,
  handleChange: (event:TargetType) => void,
  sendFormFunction: (event: React.FormEvent<HTMLFormElement>) => void,
};

function Form(props:FormProps) {
  const {
    handleClearForm,
    estadoInicial,
    handleChange,
    sendFormFunction,
  } = props;
  const [btnState, setbtnState] = useState(true);
  const { nomeDoServico, login, senha, url } = estadoInicial;
  const validPass = 'valid-password-check';
  const invalidPass = 'invalid-password-check';

  function passwordStatus() {
    const specialChars = /\W|_/;
    if (nomeDoServico.length > 0
        && login.length > 0
        && senha.length >= 8 && senha.length <= 16
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
      <form
        onSubmit={ (event) => sendFormFunction(event) }
        onKeyUpCapture={ passwordStatus }
      >
        <label>
          Nome do serviço
          <input
            name="nomeDoServico"
            required
            type="text"
            value={ nomeDoServico }
            onChange={ handleChange }
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
            name="url"
            onChange={ handleChange }
            value={ url }
          />
        </label>
        <button type="submit" disabled={ btnState }>Cadastrar</button>
        <button onClick={ handleClearForm }>Cancelar</button>
      </form>
      <p
        className={ senha.length >= 8
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
