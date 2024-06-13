import React, { useState } from 'react';
import styles from './Register.module.css'; 
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
    const [validatedData, setValidatedData] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    

    const handleCPF = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      const maskedValue = inputValue
        .replace(/\D/g, '') 
        .replace(/^(\d{0,3})(\d{0,3})/, '$1.$2') 
        .replace(/^(\d{3}\.\d{3})(\d{0,3})/, '$1.$2') 
        .replace(/^(\d{3}\.\d{3}\.\d{3})/, '$1-');
      setCpf(maskedValue);
    };

    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1);
    };

    const validateCPF = (cpf) => {
      // Remove caracteres especiais
      cpf = cpf.replace(/[^\d]/g, '');
      
      // Verifica se o CPF tem 11 dígitos
      if (cpf.length !== 11) return false;
      
      // Elimina CPFs conhecidos inválidos
      if (/^(\d)\1+$/.test(cpf)) return false;
    
      // Calcula o primeiro dígito verificador
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
      }
      let firstCheck = 11 - (sum % 11);
      if (firstCheck === 10 || firstCheck === 11) firstCheck = 0;
      if (firstCheck !== parseInt(cpf.charAt(9))) return false;
    
      // Calcula o segundo dígito verificador
      sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
      }
      let secondCheck = 11 - (sum % 11);
      if (secondCheck === 10 || secondCheck === 11) secondCheck = 0;
      if (secondCheck !== parseInt(cpf.charAt(10))) return false;
    
      return true;
    };

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    const forbiddenChars = /[@#$%&*!?/\\|_\-+=.̈{}\[\]́`~^:;<>,"‘]/;

    const isValidString = (str) => !forbiddenChars.test(str);

    const validatePhoneNumber = (phone) => {
      if (!phone) return true;
      
      const phoneRegex = /^\(?\d{2}\)?[\s-]?9?\d{4}[\s-]?\d{4}$/;
      
      return phoneRegex.test(phone);
    };
  
    const handleIncluir = () => {
      setIsDisabled(true);

      if(nome =='' || nome == undefined){
        toast.error('O nome deve inserido!');
        setIsDisabled(false);
        return;
      }

      let splitedName = nome.split(" ");

      if(splitedName.length < 2){
        toast.error('No campo Nome deve haver pelo menos 2 palavras!');
        setIsDisabled(false);
        return;
      }

      if(splitedName[0].length < 2){
        toast.error('O primeiro nome deve ter 2 caracteres ou mais!');
        setIsDisabled(false);
        return;
      }

      if(!isValidString(nome)){
        toast.error('Não deve haver caracteres especiais no nome!');
        setIsDisabled(false);
        return;
      }
      
      if(email == '' || email == undefined){
        toast.error('O e-mail deve inserido!');
        setIsDisabled(false);
        return;
      }

      if (!validateEmail(email)) {
        toast.error('Insira um e-mail válido!');
        setEmail('');
        setIsDisabled(false);
        return;
      }

      if (!senha || senha == '' || senha == undefined) {
        toast.error('Por favor, digite a senha!');
        setIsDisabled(false);
        return;
      }
  
      //Validação da confirmação de senha
      if (!confirmSenha || confirmSenha == '' || confirmSenha == undefined) {
        toast.error('Por favor, digite a confirmação da senha!');
        setIsDisabled(false);
        return;
      }

      if(senha != confirmSenha){
        toast.error('A senha deve ser igual a confirmação!');
        setIsDisabled(false);
        return;
      }
  
      const senhaRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%&*!?/\\|\-_+.=]).{6,}$/;
      if (!senhaRegex.test(confirmSenha)) {
        setMensagem('A senha deve ter pelo menos 6 caracteres, incluindo pelo menos um número, uma letra maiúscula e um dos seguintes caracteres especiais: @ # $ % & * ! ? / \ | - _ + . =');
        setIsDisabled(false);
        return;
      }

      if(cpf =='' || cpf == undefined){
        toast.error('O CPF deve inserido!');
        setIsDisabled(false);
        return;
      }

      if(!validateCPF(cpf)){
        toast.error('Insira um CPF válido!');
        setIsDisabled(false);
        return;
      }
    
      if(dataNascimento =='' || dataNascimento == undefined){
        toast.error('A data de nascimento deve inserida!');
        setIsDisabled(false);
        return;
      }

      let currentDate = moment();

      if(currentDate.diff(dataNascimento, 'years') <= 17){
        toast.error('O cliente deve ter +18 anos!');
        setIsDisabled(false);
        return;
      }

      if(!validatePhoneNumber(telefone)){
        toast.error('Para utilizar um telefone deve ser válido!');
        setIsDisabled(false);
        return;
      }

      setValidatedData(true);
      setMensagem('Validação realizada com sucesso.');

      axios.post("http://localhost:3000/user", {
        user:{
          name: nome,
          email: email,
          password: senha,
          cpf: cpf,
          birthdate: dataNascimento,
          cellphone:telefone,
          marital_status:estadoCivil,
          scholarity: escolaridade
        }
      }).then((response) => {
        if(response.data.status == 200){
          toast.success(response.data.message);
        }else{
          toast.error(response.data.message);
        }
      }).catch((error) => {
        toast.error('Erro ao cadastrar cliente!');
      })

      setMensagem('');  
      setValidatedData(false);
      setIsDisabled(false);
      setEmail('');
      setSenha('');
      setConfirmSenha('');
      setNome('');
      setCpf('');
      setDataNascimento('');
      setTelefone('');
      setEstadoCivil('solteiro');
      setEscolaridade('2o grau completo');
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
            onChange={handleCPF}
            placeholder="xxx.xxx.xxx-xx"
            maxLength={14}
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
  
        <button onClick={handleIncluir} className={styles.button} disabled={isDisabled}>Incluir</button>
        <button onClick={handleLimpar} className={styles.button} disabled={isDisabled}>Limpar</button>
        <button onClick={handleBack} className={styles.button} disabled={isDisabled}>Voltar</button>
  
        {mensagem && <p className={validatedData ? styles.validated : styles.mensagem}>{mensagem}</p>}
      </div>
    );
  };
  
export default Register;