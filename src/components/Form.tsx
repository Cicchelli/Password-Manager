import React from 'react';

type FormProps = {
  handleClearForm: () => void
};

function Form(props:FormProps) {
  const {
    handleClearForm,
  } = props;
  return (
    <form>
      <label>
        Nome do serviço
        <input type="text" />
      </label>
      <label>
        Login
        <input type="text" />
      </label>
      <label>
        Senha
        <input type="password" />
      </label>
      <label>
        URL
        <input type="text" />
      </label>
      <button>Cadastrar</button>
      <button onClick={ handleClearForm }>Cancelar</button>
    </form>
  );
}

export default Form;
