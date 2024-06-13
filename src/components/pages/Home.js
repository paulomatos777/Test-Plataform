import styles from "./Home.module.css";
import photo from "../../img/home_image.svg";
import LinkButton from "../layout/LinkButton";
import React from "react";

import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import p3 from "../../img/p3.jpeg";
import p4 from "../../img/p4.png";

const Gallery = () => {
	const images = [
	p1,
	p2,
	p3,
	p4
	];
  
	return (
		<>
		<p className={styles.gallery_title}>Galeria de Fotos da Exmed Tech</p>
		<div className={styles.gallery}>
			{images.map((image, index) => (
				<div className={styles.gallery_item} key={index}>
					<img src={image} alt={`Gallery ${index + 1}`} />
				</div>
			))}
		</div>
		</>
	);
  };

  const Services = () => {
	const services = [
	  {
		title: "Gestão Hospitalar",
		description: "Soluções integradas para a administração eficiente de hospitais e clínicas."
	  },
	  {
		title: "Telemedicina",
		description: "Plataforma avançada para consultas médicas online e gestão de pacientes à distância."
	  },
	  {
		title: "Segurança de Dados",
		description: "Implementação de sistemas robustos para proteção e privacidade de informações sensíveis."
	  },
	  {
		title: "Consultoria em TI",
		description: "Serviços especializados de consultoria para otimização de infraestrutura tecnológica."
	  },
	];
  
	return (
		<>
		<p className={styles.gallery_title}>Nossos Serviços</p>
		<div className={styles.services}>
			{services.map((service, index) => (
				<div className={styles.service_item} key={index}>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
				</div>
			))}
		</div>
		</>
	);
  };

  const Founders = () => {
	const founders = [
	  {
		role: "CEO",
		name: "Paulo Matos",
		cv: "Especialista em administração hospitalar com mais de 20 anos de experiência no setor."
	  },
	  {
		role: "CTO",
		name: "Cristiano Vale",
		cv: "Engenheira de software com vasta experiência em desenvolvimento de sistemas para saúde."
	  },
	  {
		role: "COO",
		name: "Guilherme Camara",
		cv: "Profissional de TI com foco em operações e gestão de projetos tecnológicos."
	  },
	  {
		role: "CMO",
		name: "Thiago Medina",
		cv: "Profissional de Marketing com foco em desenvolvimento de estratégias e gestão de marca."
	  },
	];
  
	return (
		<><p className={styles.gallery_title}>Fundadores</p><div className={styles.founders}>
			<table>
				<thead>
					<tr>
						<th>Cargo</th>
						<th>Nome</th>
						<th>Breve CV</th>
					</tr>
				</thead>
				<tbody>
					{founders.map((founder, index) => (
						<tr key={index}>
							<td>{founder.role}</td>
							<td>{founder.name}</td>
							<td>{founder.cv}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div></>
	);
  };

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
			{/* <img src={photo} className={styles.img} /> */}
			<iframe width="560" height="315"
			 src="https://www.youtube.com/embed/V069piBr7zk?si=0afo-e-oGeIHPbDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			<Gallery />
			<Services />
			<Founders />

		</section>
	);
}
export default Home;
