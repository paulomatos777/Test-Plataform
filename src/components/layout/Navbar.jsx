import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.svg";
import useAuth from '../../utils/useAuth.js';

function Navbar() {
	const { auth, logout } = useAuth();

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
						<Link to="/register">Cadastrar</Link>
					</li>
					{
						localStorage.getItem('token') && localStorage.getItem('user_email') && localStorage.getItem('user_name')
						?
						<>
							<li className={styles.item}>
							<Link to="/solicitacao">Solicitações</Link>
							</li>
						</>
						:
						''
					}
						{
						localStorage.getItem('token') && localStorage.getItem('user_email') && localStorage.getItem('user_name')
						?
						<>
							<li className={styles.item}>
							<Link to="/criar-servico">Criar Serviço</Link>
							</li>
						</>
						:
						''
					}
				</ul>
			</Container>
		</div>
	);
}
export default Navbar;
