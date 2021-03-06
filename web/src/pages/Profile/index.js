import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import swal from 'sweetalert';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ngoId = localStorage.getItem('ngoId');
  const ngoName = localStorage.getItem('ngoName');

  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: { ngo_id: ngoId }
    }).then(response => setIncidents(response.data))
  }, [ngoId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { ngo_id: ngoId }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      swal('Erro ao deletar caso', 'Tente novamente.', 'error');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be the Hero" />
        <span>Bem-vinda {ngoName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout}>
          <FiPower size={18} color={'#e02041'} />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}