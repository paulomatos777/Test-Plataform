import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./TestForm.module.css";

function TestForm({ handleSubmit, btnText, testData }) {
	const [test, setTest] = useState(testData || {});

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
		setTest({ ...test, [e.target.name]: e.target.value });
	}

	function handleCategory(e) {
		console.log(e);
		setTest({
			...test,
			category: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text,
			},
		});
	}

	function handleState(e) {
		setTest({
			...test,
			state: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text,
			},
		});
	}

	return (
		<form onSubmit={(e) => handleSubmit(test, e)} className={styles.form}>
			<Input
				type="text"
				text="Nome do método de pagamento"
				name="name"
				placeholder="Insira o nome do método de pagamento"
				handleOnChange={handleChange}
				value={test.name}
			/>
			<div>
				<Input
					type="text"
					text="Valor máximo"
					name="description"
					placeholder="Valor máximo do método de pagamento"
					handleOnChange={handleChange}
					value={test.description}
				/>
			</div>
			<div>
				<Select
					name="envirement_id"
					text="Selecione o tipo"
					options={categories}
					handleOnChange={handleCategory}
					value={test.category ? test.category.name : ""}
				/>
			</div>
			<div>
				<Select
					name="status_id"
					text="Selecione o Status"
					options={states}
					handleOnChange={handleState}
					value={test.state ? test.state.id : ""}
				/>
			</div>
			<div>
				<SubmitButton text={btnText} />
			</div>
		</form>
	);
}
export default TestForm;
