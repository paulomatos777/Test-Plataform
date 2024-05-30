import styles from "./Home.module.css";
import photo from "../../img/home_image.svg";
import LinkButton from "../layout/LinkButton";
import React from "react";

function Home() {
	return (
		<section className={styles.home_container}>
			<h1>
				Bem-Vindo ao <span>Exmed Payments</span>
			</h1>
			<p>Gerenciador de métodos de pagamento</p>
			<LinkButton to="/newtask" text="Adicionar meio de pagamento" />
			<img src={photo} className={styles.img} />
		</section>
	);
}
export default Home;
