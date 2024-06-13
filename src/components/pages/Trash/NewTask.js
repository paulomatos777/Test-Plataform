import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import TestForm from "../../test/TestForm";
import styles from "./NewTask.module.css";

function NewTask() {
	const navigate = useNavigate();
	function handleSubmit(test, e) {
		e.preventDefault();
		api.post("/testes", {
			name: test.name,
			max_value: test.max_value,
			type: test.type.name,
		});
		navigate("/testes");
	}

	return (
		<div className={styles.newtask_container}>
			<h1>Adicionar método de pagamento</h1>
			<p>Adicione seu método de pagamento desejado</p>
			<TestForm btnText="Adicionar " handleSubmit={handleSubmit} />
		</div>
	);
}
export default NewTask;
