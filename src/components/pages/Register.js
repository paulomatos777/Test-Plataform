import React, { useState } from 'react';
import styles from './Register.module.css'; // Importe seus estilos CSS aqui

function Register() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('solteiro');
    const [escolaridade, setEscolaridade] = useState('2o grau completo');
    const [mensagem, setMensagem] = useState('');
  
    const handleIncluir = () => {
      // Validações...
  
      // Simulação de sucesso
      setMensagem('Validação realizada com sucesso.');
  
      // Limpar campos
      setEmail('');
      setSenha('');
      setConfirmSenha('');
      setNome('');
      setCpf('');
      setDataNascimento('');
      setTelefone('');
  
      // Voltar radio buttons e combo box para valores default
      setEstadoCivil('solteiro');
      setEscolaridade('2o grau completo');
  
      // Focar no campo de e-mail
      document.getElementById('emailInput').focus();
    };
  
    const handleLimpar = () => {
      setEmail('');
      setSenha('');
      setConfirmSenha('');
      setNome('');
      setCpf('');
      setDataNascimento('');
      setTelefone('');
      setEstadoCivil('solteiro');
      setEscolaridade('2o grau completo');
      setMensagem('');
      document.getElementById('emailInput').focus();
    };
  
    return (
      <div className={styles.container}>
        <h1>Cadastro de clientes</h1>
  
        <div className={styles.inputContainer}>
          <label htmlFor="emailInput">E-mail (Login):</label>
          <input
            id="emailInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
  
        <div className={styles.inputContainer}>
          <label htmlFor="senhaInput">Senha:</label>
          <input
            id="senhaInput"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
          />
        </div>
  
        <div className={styles.inputContainer}>
          <label htmlFor="confirmSenhaInput">Confirme a senha:</label>
          <input
            id="confirmSenhaInput"
            type="password"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            className={styles.input}
          />
        </div>
  
        <div className={styles.inputContainer}>
          <label htmlFor="nomeInput">Nome:</label>
          <input
            id="nomeInput"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={styles.input}
          />
        </div>
  
        <div className={styles.inputContainer}>
          <label htmlFor="cpfInput">CPF:</label>
          <input
            id="cpfInput"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className={styles.input}
          />
        </div>
  
        <div className={styles.inputContainer}>
          <label htmlFor="dataNascimentoInput">Data de Nascimento:</label>
          <input
            id="dataNascimentoInput"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            className={styles.input}
          />
        </div>
  
        <div className={styles.inputContainer}>
          <label htmlFor="telefoneInput">Telefone/Celular:</label>
          <input
            id="telefoneInput"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className={styles.input}
          />
        </div>
  
        <div className={styles.inputContainer}>
          <p>Estado Civil:</p>
          <div>
            <input
              type="radio"
              id="solteiro"
              name="estadoCivil"
              value="solteiro"
              checked={estadoCivil === 'solteiro'}
              onChange={() => setEstadoCivil('solteiro')}
            />
            <label htmlFor="solteiro">Solteiro(a)</label>
          </div>
          <div>
            <input
              type="radio"
              id="casado"
              name="estadoCivil"
              value="casado"
              checked={estadoCivil === 'casado'}
              onChange={() => setEstadoCivil('casado')}
            />
            <label htmlFor="casado">Casado(a)</label>
          </div>
          <div>
            <input
              type="radio"
              id="divorciado"
              name="estadoCivil"
              value="divorciado"
              checked={estadoCivil === 'divorciado'}
              onChange={() => setEstadoCivil('divorciado')}
            />
            <label htmlFor="divorciado">Divorciado(a)</label>
          </div>
          <div>
            <input
              type="radio"
              id="viuvo"
              name="estadoCivil"
              value="viuvo"
              checked={estadoCivil === 'viuvo'}
              onChange={() => setEstadoCivil('viuvo')}
            />
            <label htmlFor="viuvo">Viúvo(a)</label>
          </div>
        </div>
  
        <div className={styles.inputContainer}>
          <label htmlFor="escolaridadeSelect">Escolaridade:</label>
          <select
            id="escolaridadeSelect"
            value={escolaridade}
            onChange={(e) => setEscolaridade(e.target.value)}
            className={styles.input}
          >
            <option value="1o grau incompleto">1o grau incompleto</option>
            <option value="1o grau completo">1o grau completo</option>
            <option value="2o grau completo">2o grau completo</option>
            <option value="nível superior">nível superior</option>
            <option value="pós-graduado">pós-graduado</option>
          </select>
        </div>
  
        <button onClick={handleIncluir} className={styles.button}>Incluir</button>
        <button onClick={handleLimpar} className={styles.button}>Limpar</button>
        <button className={styles.button}>Voltar</button>
  
        {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
      </div>
    );
  };
  
export default Register;