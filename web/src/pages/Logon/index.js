import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
	const [id, setId] = useState('');

	const history = useHistory();

	async function handleLogon(e) {
		e.preventDefault();

		try {
			const response = await api.post('session', { id });

			localStorage.setItem('ngoId', id);
			localStorage.setItem('ngoName', response.data.name);

			history.push('/profile');
		} catch (error) {
			alert('Falha no login, tente novamente');
		}
	}

	return (
		<div className="logon-container">
			<section className="form">
				<img src={logo} alt="Be the Hero" />

				<form onSubmit={handleLogon}>
					<h1>Faça seu logon</h1>

					<input
						type="text"
						placeholder="Seu ID"
						value={id}
						onChange={e => setId(e.target.value)}
					/>

					<button className="button" type="submit">Entrar</button>

					<Link className="link" to="/register">
						<FiLogIn size={16} color={'#e02041'} />
						Não tenho cadastro
						</Link>
				</form>
			</section>
			<img src={heroesImg} alt="Heroes" />
		</div>
	);
}