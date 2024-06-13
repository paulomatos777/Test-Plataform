import react from 'react';
import styles from "../Home.module.css";

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

export default Founders;