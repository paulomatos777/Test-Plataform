import styles from "./TestCard.module.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function TestCard({ id, name, type, handleRemove }) {
	const remove = (e) => {
		e.preventDefault();
		handleRemove(id);
	};
	return (
		<div className={styles.test_card}>
			<h4>{name}</h4>
			<p>
				<span>Tipo:</span>
				{type}
			</p>

			<div className={styles.test_card_actions}>
				<Link to={`/teste/${id}`}>
					{" "}
					<BsFillPencilFill />
					Visualizar
				</Link>
				<button onClick={remove}>
					<BsFillTrashFill />
					Remover
				</button>
			</div>
		</div>
	);
}
export default TestCard;
