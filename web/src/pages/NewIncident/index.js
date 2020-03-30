import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be the Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

          <Link className="link" to="/profile">
            <FiArrowLeft size={16} color={'#e02041'} />
						Voltar para home
						</Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso" />
          <textarea placeholder="Descrição"></textarea>
          <input type="number" placeholder="Valor em reais" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}