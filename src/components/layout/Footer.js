import styles from "./Footer.module.css";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

function Footer() {
	return (
	  <footer className={styles.footer}>
		<div className={styles.footer_section}>
		  <h3>Contatos</h3>
		  <ul className={styles.contact_list}>
			<li>Telefone: (11) 1234-5678</li>
			<li>WhatsApp: (11) 98765-4321</li>
			<li>Email: <a href="mailto:contato@exmedtech.com">contato@exmedtech.com</a></li>
		  </ul>
		</div>
		<div className={styles.footer_section}>
		  <h3>Endereço</h3>
		  <p>
			Av. Paulista, 1234<br />
			São Paulo, SP<br />
			CEP: 01310-100
		  </p>
		</div>
		<div className={styles.footer_section}>
		  <h3>Formas de Pagamento</h3>
		  <ul className={styles.payment_list}>
			<li><FaCcVisa /></li>
			<li><FaCcMastercard /></li>
			<li><FaCcPaypal /></li>
		  </ul>
		</div>
	  </footer>
	);
  }
export default Footer;
