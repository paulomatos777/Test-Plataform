import React, { useEffect, useState } from 'react';
import styles from "./CreateService.module.css";
import http from '../../../http/index.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CreateService() {
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [serviceDeadline, setServiceDeadline] = useState('');
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if(!(localStorage.getItem('token') && localStorage.getItem('user_email') && localStorage.getItem('user_name'))){
      setIsDisabled(true);
      toast.error('Realize o login!');
      setTimeout(() => {
        handleBack();
      }, 1500);
    }
  }, []);

  const isNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  const handleRegisterService = () => {
    setIsDisabled(true);

    if (!serviceName) {
      toast.error('O nome do serviço deve ser preenchido!');
      setIsDisabled(false);
      return;
    }
    if (!isNumber(servicePrice)) {
      toast.error('O preço do serviço deve ser um número!');
      setIsDisabled(false);
      return;
    }

    if (!serviceDeadline) {
      toast.error('O prazo de atendimento deve ser preenchido!');
      setIsDisabled(false);
      return;
    }
    
    if (!isNumber(serviceDeadline)) {
      toast.error('O prazo de atendimento deve ser um número!');
      setIsDisabled(false);
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
      
      setIsDisabled(false);
      setServiceName('');
      setServicePrice('');
      setServiceDeadline('');
      setMessage('');
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
          <button onClick={handleRegisterService} disabled={isDisabled}>Cadastrar Serviço</button>
          <button onClick={handleClear} disabled={isDisabled}>Limpar</button>
        </div>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

export default CreateService;
