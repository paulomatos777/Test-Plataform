import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./TestForm.module.css";

function TestForm({ handleSubmit, btnText, testData }) {
	const [payment, setPayment] = useState(testData || {});

	const types = [
		{
			key: "eletronic",
			value: "Eletrônico",
		},
		{
			key: "fisical",
			value: "Físico",
		},
	];

	function handleChange(e) {
		setPayment({ ...payment, [e.target.name]: e.target.value });
	}

	function handleType(e) {
		setPayment({
			...payment,
			type: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text,
			},
		});
	}

	return (
		<form onSubmit={(e) => handleSubmit(payment, e)} className={styles.form}>
			<Input
				type="text"
				text="Nome do método de pagamento"
				name="name"
				placeholder="Insira o nome do método de pagamento"
				handleOnChange={handleChange}
				value={payment.name}
			/>
			<div>
				<Input
					type="integer"
					text="Valor máximo"
					name="max_value"
					placeholder="Valor máximo do método de pagamento"
					handleOnChange={handleChange}
					value={payment.description}
				/>
			</div>
			<div>
				<Select
					type="text"
					name="type"
					text="Selecione o tipo"
					options={types}
					handleOnChange={handleType}
					value={payment.type ? payment.type.name : ""}
				/>
			</div>
			<div>
				<SubmitButton text={btnText} />
			</div>
		</form>
	);
}
export default TestForm;
