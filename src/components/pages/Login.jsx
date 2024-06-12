// import { useNavigate } from "react-router-dom";
// import { api } from "../../services/api";
// import TestForm from "../test/TestForm";
import {useState} from "react";
import styles from "./Login.module.css";
import axios from 'axios';
import http from '../../http/index.js';
import useAuth from '../../utils/useAuth.js'; 
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const { login } = useAuth();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    setIsDisabled(true);
    if (!email) {
      setMessage('O campo de login deve ser preenchido.');
      setIsDisabled(false);
      return;
    }
    if (!validateEmail(email)) {
      setMessage('O login deve ter formato de e-mail válido.');
      setIsDisabled(false);
      return;
    }
    if (!password) {
      setIsDisabled(false);
      setMessage('O campo de senha deve ser preenchido.');
      return;
    }
    axios.post("http://localhost:3000/login", {
      email: email,
      password: password
    }).then((response) => {
      console.log('login realizado com sucesso!');
      if(response.data.status == 200){
        login(response.data.data.token, response.data.data.user_login, response.data.data.user_name);
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }else{
        toast.error(response.data.message);
        setIsDisabled(false);
      }
    }).catch((error) => {
      console.log(error);
      setIsDisabled(false);
    })
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setMessage('');
  };
  
    return (
        <div className={styles.login_page}>
          <h1>Login</h1>
          <div className={styles.login_form}>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.button_group}>
              <button onClick={handleLogin} disabled={isDisabled}>Realizar Login</button>
              <button onClick={handleClear}>Limpar</button>
            </div>
            {message && <p className={styles.message}>{message}</p>}
          </div>
          <div className={styles.links}>
            <a href="/trocar-senha">Trocar senha</a>
            <a href="/register">Cadastro de cliente</a>
          </div>
        </div>
      );
    }

  export default Login;