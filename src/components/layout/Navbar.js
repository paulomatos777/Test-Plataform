import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.svg";

function Navbar() {
	return (
		<div className={styles.navbar}>
			<Container>
				<Link to="/">
					<div className={styles.logoWrapper}>
						<img src={logo} alt="Exmed Testes Logo" className={styles.img} />
						<span className={styles.test}>
							<h3>Payments</h3>
						</span>
					</div>
				</Link>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to="/">Home</Link>
					</li>
					<li className={styles.item}>
						<Link to="/testes">Métodos de pagamento</Link>
					</li>
				</ul>
			</Container>
		</div>
	);
}
export default Navbar;
