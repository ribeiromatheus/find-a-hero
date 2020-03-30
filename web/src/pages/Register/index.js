import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Logon() {
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logo} alt="Be the Hero" />

					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

					<Link className="link" to="/">
						<FiArrowLeft size={16} color={'#e02041'} />
						Voltar para o logon
						</Link>
				</section>

				<form>
					<input type="text" placeholder="Nome da ONG" />
					<input type="email" placeholder="Email" />
					<input type="text" placeholder="Whatsapp" />

					<div className="input-group">
						<input type="text" placeholder="Cidade" />
						<input type="text" placeholder="UF" style={{ width: 80 }} />
					</div>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}