import React from "react";
import styles from "../Home.module.css";

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

export default Services;