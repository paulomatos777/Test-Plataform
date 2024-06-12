import React, { useState } from 'react';
import styles from './Carrinho.module.css'; // Importe seus estilos CSS aqui

const Carrinho = () => {
    const [servicoSelecionado, setServicoSelecionado] = useState('');
    const [dataPrevistaAtendimento, setDataPrevistaAtendimento] = useState('');
    const [status, setStatus] = useState('Em elaboração');
    const [solicitacoes, setSolicitacoes] = useState([
      { dataPedido: '01/06/2024', numSolicitacao: 123456, servico: 'Manutenção de rede', status: 'Em andamento', preco: 100, dataPrevista: '01/07/2024' },
      { dataPedido: '03/06/2024', numSolicitacao: 789012, servico: 'Instalação de software', status: 'Concluído', preco: 50, dataPrevista: '15/06/2024' },
      { dataPedido: '05/06/2024', numSolicitacao: 345678, servico: 'Configuração de segurança', status: 'Em espera', preco: 80, dataPrevista: '20/06/2024' }
    ]);
  
    const handleExcluirSolicitacao = (index) => {
      const novasSolicitacoes = [...solicitacoes];
      novasSolicitacoes.splice(index, 1);
      setSolicitacoes(novasSolicitacoes);
    };
  
    const handleIncluirSolicitacao = () => {
      // Lógica para incluir a solicitação na tabela
      const novaSolicitacao = {
        dataPedido: new Date().toLocaleDateString(),
        numSolicitacao: Math.floor(Math.random() * 1000000), // Número aleatório
        servico: servicoSelecionado,
        status: status,
        dataPrevista: dataPrevistaAtendimento
      };
      setSolicitacoes([...solicitacoes, novaSolicitacao]);
    };
  
    return (
      <div className={styles.container}>
        <h1>Carrinho - Solicitação de Serviços de TI</h1>
  
        <section className={styles.usuarioLogado}>
          <h2>Usuário Logado</h2>
          <div>
            <label>Nome:</label>
            <span>John Doe</span>
          </div>
          <div>
            <label>Login (E-mail):</label>
            <span>john.doe@example.com</span>
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
                <th>Data Prevista de Atendimento</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {solicitacoes.map((solicitacao, index) => (
                <tr key={index}>
                  <td>{solicitacao.dataPedido}</td>
                  <td>{solicitacao.numSolicitacao}</td>
                  <td>{solicitacao.servico}</td>
                  <td>{solicitacao.status}</td>
                  <td>{solicitacao.dataPrevista}</td>
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
              <option value="Manutenção de rede">Manutenção de rede</option>
              <option value="Instalação de software">Instalação de software</option>
              <option value="Configuração de segurança">Configuração de segurança</option>
            </select>
          </div>
          <div>
            <label htmlFor="dataPrevistaInput">Data Prevista de Atendimento:</label>
            <input
              id="dataPrevistaInput"
              type="date"
              value={dataPrevistaAtendimento}
              onChange={(e) => setDataPrevistaAtendimento(e.target.value)}
              className={styles.input}
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
          <button onClick={handleIncluirSolicitacao} className={styles.button}>Incluir Solicitação</button>
        </section>
      </div>
    );
  };

export default Carrinho;
