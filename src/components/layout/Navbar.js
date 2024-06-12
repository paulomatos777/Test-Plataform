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
						<img src={logo} alt="Exmed TECH Logo" className={styles.img} />
						<span className={styles.test}>
							<h3>TECH</h3>
						</span>
					</div>
				</Link>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to="/login">Login</Link>
					</li>
					<li className={styles.item}>
						<Link to="/testes">Cadastrar</Link>
					</li>
					<li className={styles.item}>
						<Link to="/testes">Solicitações</Link>
					</li>
				</ul>
			</Container>
		</div>
	);
}
export default Navbar;
