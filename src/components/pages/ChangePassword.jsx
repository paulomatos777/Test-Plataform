import React, { useState } from 'react';
import styles from './ChangePassword.module.css'; // Importando o arquivo CSS
// import axios from 'axios';
import http from '../../http/index.js';
import { toast } from 'react-toastify';

const ChangePassword = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [validatedData, setValidatedData] = useState(false)

  const handleTrocaSenha = () => {
    setIsDisabled(true);
    ///Validação do login
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!login || !emailRegex.test(login)) {
      setMensagem('Por favor, insira um e-mail válido no campo de login.');
      return;
    }

    //Validação da senha
    if (!senha) {
      setMensagem('Por favor, insira a senha atual!');
      return;
    }

    //Validação da confirmação de senha
    if (!confirmSenha) {
      setMensagem('Por favor, insira a nova senha!');
      return;
    }

    //Validação da composição da senha
    const senhaRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%&*!?/\\|\-_+.=]).{6,}$/;
    if (!senhaRegex.test(confirmSenha)) {
      setMensagem('A senha deve ter pelo menos 6 caracteres, incluindo pelo menos um número, uma letra maiúscula e um dos seguintes caracteres especiais: @ # $ % & * ! ? / \ | - _ + . =');
      return;
    }
    setValidatedData(true);
    setMensagem('Validação realizada com sucesso.');

    http.put("/change-password", {
        email: login,
        password: senha,
        new_password:confirmSenha
    }).then((response) => {
      
      if(response.data.status == 200){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    }).catch((error) => {
      toast.error("Erro ao atualizar a senha!");
    }).finally(() => {
      setIsDisabled(true);
    })

    setMensagem('');
    setValidatedData(false);
  };

  const handleLimpar = () => {
    setLogin('');
    setSenha('');
    setConfirmSenha('');
    setMensagem('');
    document.getElementById('loginInput').focus();
  };

  return (
    <div className={styles.container}>
      <h1>Troca senha de clientes</h1>
      {/* <img src="caminho/do/logo.png" alt="Logo da Empresa" className={styles.logo} /> */}
      <div className={styles.inputContainer}>
        <label htmlFor="loginInput">Login:</label>
        <input
          id="loginInput"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Senha Atual:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Nova Senha:</label>
        <input
          type="password"
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.instrucoes}>
        <p>Instruções sobre a regra de composição da senha:</p>
        <p>A senha deve ter pelo menos 6 caracteres, sendo pelo menos: um dos caracteres numérico, um dos caracteres letra maiúscula, e um dos caracteres especiais abaixo: @ # $ % & * ! ? / \ | - _ + . =</p>
        <p>{`Os seguintes caracteres abaixo não são permitidos para a senha:  ̈ { } [ ]   ~ ^ : ; < > `}</p>
      </div>
      <button onClick={handleTrocaSenha} className={styles.button} disabled={isDisabled}>Troca Senha</button>
      <button onClick={handleLimpar} className={styles.button}>Limpar</button>
      {mensagem && <p className={validatedData ? styles.validated : styles.mensagem}>{mensagem}</p>}
    </div>
  );
};

export default ChangePassword;