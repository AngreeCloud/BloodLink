import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReservasPublicas } from "../api/reservas";
import { getPostosPublicos } from "../api/postos";

const HomePublic = () => {
  const [reservas, setReservas] = useState([]);
  const [postos, setPostos] = useState([]);

  useEffect(() => {
    getReservasPublicas().then(setReservas);
    getPostosPublicos().then(setPostos);
  }, []);

  return (
    <div className="page-grid">
      <section className="card">
        <h1>Zona publica BloodLink</h1>
        <p>Niveis atuais de reservas e informacao de acesso rapido sem login.</p>
        <div className="landing-cta">
          <Link className="button" to="/quiz">Posso Doar?</Link>
          <Link className="button button-secondary" to="/brigadas">Ver Brigadas Moveis</Link>
          <Link className="button button-secondary" to="/login">Entrar / Criar Conta</Link>
        </div>
      </section>

      <section className="card">
        <h2>Reservas atuais</h2>
        {reservas.length === 0 ? <p>Sem dados.</p> : (
          <ul>
            {reservas.map((item) => (
              <li key={item.id}>{item.tipo}: {item.quantidade} bolsas ({item.estado})</li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2>Mapa de postos</h2>
        {postos.length === 0 ? <p>Sem postos disponiveis.</p> : (
          <ul>
            {postos.map((posto) => (
              <li key={posto.id}>{posto.nome} · {posto.cidade} · {posto.horario}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default HomePublic;
