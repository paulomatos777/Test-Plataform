import styles from "./Home.module.css";
import photo from "../../../img/home_image.svg";
import LinkButton from "../../layout/LinkButton";
import React from "react";
import Founders from "./components/Founders.jsx"; 
import Services from "./components/Services.jsx"; 
import Gallery from "./components/Gallery.jsx"; 

function Home() {
	return (
		<section className={styles.home_container}>
			<h1>
				Onde a tecnologia inspira o avanço, <span>Exmed TECH</span>
			</h1>
			<p>
			A Exmed Tech é uma empresa de tecnologia da informação fundada em 2010, 
			especializada em soluções inovadoras para o setor de saúde. Com sede em São Paulo, 
			a empresa desenvolve sistemas avançados de gestão hospitalar e telemedicina. 
			Destaca-se pela excelência em atendimento ao cliente e compromisso com a melhoria 
			contínua dos serviços médicos.</p>
			<LinkButton to="/login" text="Faça o Login na sua conta " />
			<iframe width="560" height="315"
			 src="https://www.youtube.com/embed/V069piBr7zk?si=0afo-e-oGeIHPbDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			<Gallery />
			<Services />
			<Founders />

		</section>
	);
}
export default Home;
