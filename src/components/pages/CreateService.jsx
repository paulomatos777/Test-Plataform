import React, { useState } from 'react';
// import './ServiceRegistrationPage.css';
// import logo from './logo.png'; // Certifique-se de ter o logo da empresa na pasta src
import styles from "./CreateService.module.css";
import http from '../../http/index.js';
import { toast } from 'react-toastify';

function CreateService() {
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [serviceDeadline, setServiceDeadline] = useState('');
  const [message, setMessage] = useState('');

  const handleRegisterService = () => {
    if (!serviceName) {
      setMessage('O nome do serviço deve ser preenchido.');
      return;
    }
    if (!servicePrice) {
      setMessage('O preço do serviço deve ser preenchido.');
      return;
    }
    if (!serviceDeadline) {
      setMessage('O prazo de atendimento deve ser preenchido.');
      return;
    }

    http.post('/service', {
        service:{
            description: serviceName,
            price: servicePrice,
            term: serviceDeadline
        }
      }).then((response) => {
        if(response.data.status == 200){
          toast.success(response.data.message);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }else{
          toast.error(response.data.message);
        }
      }).catch((error) => {
        toast.error('Erro ao criar serviço de TI!');
      })
    }
   

  const handleClear = () => {
    setServiceName('');
    setServicePrice('');
    setServiceDeadline('');
    setMessage('');
  };

  return (
    <div className={styles.service_registration_page}>
      <h1>Cadastro de Serviço de TI</h1>
      <div className={styles.service_registration_form}>
        <label>Nome do Serviço:</label>
        <input
          type="text"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
        <label>Preço do Serviço:</label>
        <input
          type="text"
          value={servicePrice}
          onChange={(e) => setServicePrice(e.target.value)}
        />
        <label>Prazo de Atendimento:</label>
        <input
          type="text"
          value={serviceDeadline}
          onChange={(e) => setServiceDeadline(e.target.value)}
        />
        <div className={styles.button_group}>
          <button onClick={handleRegisterService}>Cadastrar Serviço</button>
          <button onClick={handleClear}>Limpar</button>
        </div>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

export default CreateService;
