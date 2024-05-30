import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./TestForm.module.css";

function TestForm({ handleSubmit, btnText, testData }) {
	const [payment, setPayment] = useState(testData || {});

	const categories = [
		{
			key: "eletronic",
			value: "Eletrônico",
		},
		{
			key: "fisical",
			value: "Físico",
		},
	];

	const states = [
		{
			key: "working",
			value: "working",
		},
		{
			key: "error",
			value: "error",
		},
	];

	function handleChange(e) {
		setPayment({ ...payment, [e.target.name]: e.target.value });
	}

	function handleCategory(e) {
		console.log(e);
		setPayment({
			...payment,
			category: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text,
			},
		});
	}

	function handleState(e) {
		setPayment({
			...payment,
			state: {
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
					name="type"
					text="Selecione o tipo"
					options={categories}
					handleOnChange={handleCategory}
					value={payment.category ? payment.category.name : ""}
				/>
			</div>
			<div>
				<SubmitButton text={btnText} />
			</div>
		</form>
	);
}
export default TestForm;
