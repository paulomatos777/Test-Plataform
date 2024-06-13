import React, { useState, useEffect } from 'react';
import styles from './Carrinho.module.css'; 
import http from '../../http/index.js';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Carrinho = () => {
    const [servicoSelecionado, setServicoSelecionado] = useState('');
    const [dataPrevistaAtendimento, setDataPrevistaAtendimento] = useState('');
    const [status, setStatus] = useState('Em elaboração');
    const [services, setServices] = useState([]);
    const [requestServicesFromUser, setRequestServicesFromUser] = useState([]);
    const [price, setPrice] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
  
    const handleExcluirSolicitacao = (index) => {
      const newRequestsService = [...requestServicesFromUser];
      newRequestsService.splice(index, 1);
      setRequestServicesFromUser(newRequestsService);
    };

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

    useEffect(() => {
      http.get('/service').then((response) => {
        if(response.data.status == 200){
          setServices(response.data.data.services);
        }
      })
    }, []);

    useEffect(() => {
      http.get('/service-request/' + localStorage.getItem('user_email')).then((response) => {
        if(response.data.status == 200){
          setRequestServicesFromUser(response.data.data.service_requests);
        }
      })
    }, []);

    const formatDate = (dateString) => moment(dateString).format('DD/MM/YYYY');
  
    const handleIncluirSolicitacao = () => {
      setIsDisabled(true);
      if(servicoSelecionado && servicoSelecionado >= 0){
        try{
          const novaSolicitacao = {
            request_date: moment(),
            request_number: Math.floor(Math.random() * 1000000), 
            description: services[servicoSelecionado].description,
            status: status,
            price: services[servicoSelecionado].price,
            predicted_realize_date: moment().add(services[servicoSelecionado].term, 'days'),
            service: services[servicoSelecionado].id
          };
          setRequestServicesFromUser([...requestServicesFromUser, novaSolicitacao]);
          setServicoSelecionado('');
          setStatus('Em elaboração');
          toast.success('Solicitação de serviço adicionada com sucesso!');
        }catch(error){
          toast.error('Erro ao adicionar solicitação de serviço!');
        }
      }else{
        toast.error('Preencha todos os campos necessários!');
      }
      setIsDisabled(false);
    };

    const handleSaveUpdates = () => {
      setIsDisabled(true);
      http.post('/service-request/', {
        user: {
          email: localStorage.getItem('user_email')
        },
        serviceRequests: requestServicesFromUser
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
        toast.error('Erro ao atualizar as solicitações de serviço!');
      })
      setIsDisabled(false);
    }
  
    return (
      <div className={styles.container}>
        <h1>Carrinho - Solicitação de Serviços de TI</h1>
  
        <section className={styles.usuarioLogado}>
          <h2>Usuário Logado</h2>
          <div>
            <label>Nome:</label>
            <span>{localStorage.getItem('user_name') ?? 'Usuário Não Logado'}</span>
          </div>
          <div>
            <label>Login (E-mail):</label>
            <span>{localStorage.getItem('user_email') ?? 'Usuário Não Logado'}</span>
          </div>
        </section>
  
        <section className={styles.solicitacoesAnteriores}>
          <h2>Solicitações Anteriores</h2>
          <table>
            <thead>
              <tr>
                <th>Data do Pedido</th>
                <th>Número da Solicitação</th>
                <th>Serviço de TI</th>
                <th>Status</th>
                <th>Preço</th>
                <th>Data Prevista de Atendimento</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {requestServicesFromUser.map((solicitacao, index) => (
                <tr key={index}>
                  <td>{formatDate(solicitacao.request_date)}</td>
                  <td>{solicitacao.request_number}</td>
                  <td>{solicitacao.description}</td>
                  <td>{solicitacao.status}</td>
                  <td>{solicitacao.price}</td>
                  <td>{formatDate(solicitacao.predicted_realize_date)}</td>
                  <td>
                    <button onClick={() => handleExcluirSolicitacao(index)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
  
        <section className={styles.novaSolicitacao}>
          <h2>Nova Solicitação de Serviço</h2>
          <div>
            <label htmlFor="servicoSelect">Serviço de TI:</label>
            <select
              id="servicoSelect"
              value={servicoSelecionado}
              onChange={(e) => {
                setServicoSelecionado(e.target.value);
              }}
              className={styles.input}
            >
              <option value="">Selecione...</option>
              {services.map((service, index) => (
                <option key={index} value={index}>
                  {service.description}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="dataPrevistaInput">Data Prevista de Atendimento:</label>
            <input
              id="dataPrevistaInput"
              type="date"
              value={servicoSelecionado && servicoSelecionado >= 0 ? moment().add(services[servicoSelecionado].term, 'days').format('YYYY-MM-DD') : ''}
              onChange={(e) => setDataPrevistaAtendimento(e.target.value)}
              className={styles.input}
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="dataPrevistaInput">Preço: </label>
            <input
              id="dataPrevistaInput"
              type="text"
              value={servicoSelecionado && servicoSelecionado >= 0 ? services[servicoSelecionado].price : ''}
              className={styles.input}
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="dataPrevistaInput">Prazo de Atendimento:</label>
            <input
              id="dataPrevistaInput"
              type="text"
              value={servicoSelecionado && servicoSelecionado >= 0 ? services[servicoSelecionado].term + ' dias' : ''}
              className={styles.input}
              disabled={true}
            />
            
          </div>
          <div>
            <label htmlFor="statusInput">Status:</label>
            <input
              id="statusInput"
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={styles.input}
            />
          </div>
          <button onClick={handleIncluirSolicitacao} className={styles.button} disabled={isDisabled}>Incluir Solicitação</button>
          <button onClick={handleSaveUpdates} className={styles.button} disabled={isDisabled}>Salvar Atualizações</button>
        </section>
      </div>
    );
  };

export default Carrinho;
