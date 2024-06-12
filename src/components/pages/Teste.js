import styles from "./Teste.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import TestForm from "../test/TestForm";
import Message from "../layout/Message";
import { api } from "../../services/api";

function Teste() {
  const { id } = useParams();

  console.log(id);
  const [teste, setTeste] = useState([]);
  const [showTesteForm, setShowTesteForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      api
        .get(`/testes/${id}`)
        .then((response) => {
          setTeste(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, 300);
  }, [id]);

  function toogleProjectForm() {
    setShowTesteForm(!showTesteForm);
  }

  function updateTest(teste) {
    setTimeout(() => {
      api
        .put(`/testes/${id}`, teste)
        .then((response) => {
          setTeste(response);
          setShowTesteForm(false);
          setMessage("Projeto Atualizado!");
          setType("sucess");
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, 300);

    // fetch(`http://localhost:5000/testes/${teste.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify(teste),
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setTeste(data);
    //     setShowTesteForm(false);
    //     setMessage("Projeto Atualizado!");
    //     setType("sucess");
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <>
      {teste.test_title ? (
        <div className={styles.teste_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Teste: {teste.test_title}</h1>
              <button className={styles.btn} onClick={toogleProjectForm}>
                {!showTesteForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showTesteForm ? (
                <div className={styles.teste_info}>
                  <p>
                    <span>Ambiente: </span>
                    {teste.test_environment}
                  </p>
                  <p>
                    <span>Nome: </span>
                    {teste.test_title}
                  </p>
                  <p>
                    <span>Descrição: </span>
                    {teste.test_description}
                  </p>
                </div>
              ) : (
                <div className={styles.teste_info}>
                  <TestForm
                    handleSubmit={updateTest}
                    btnText="Concluir edição"
                    testData={teste}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Teste;
