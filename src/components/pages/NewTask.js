import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import TestForm from "../test/TestForm";
import styles from "./NewTask.module.css";

function NewTask() {
  const navigate = useNavigate();
  function handleSubmit(test, e) {
    e.preventDefault();
    api.post("/testes", {
      test_title: test.name,
      test_description: test.description,
      author: test.name,
      test_status: test.state.name,
      test_environment: test.category.name,
    });
    navigate("/testes");
  }

  return (
    <div className={styles.newtask_container}>
      <h1>Criar Teste</h1>
      <p>Crie seu Teste para depois adicionar a Lista </p>
      <TestForm btnText="Criar teste" handleSubmit={handleSubmit} />
    </div>
  );
}
export default NewTask;
