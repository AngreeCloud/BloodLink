import { useEffect, useState } from "react";
import { getPostosPublicos } from "../api/postos";

const PostosPublic = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPostosPublicos().then(setItems);
  }, []);

  return (
    <div className="page-grid">
      <div className="card">
        <h1>Mapa de postos</h1>
        <p>Postos fixos de recolha com acesso publico.</p>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Posto</th><th>Cidade</th><th>Horario</th><th>Contacto</th></tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr><td colSpan={4}>Sem dados disponiveis.</td></tr>
            ) : items.map((posto) => (
              <tr key={posto.id}>
                <td>{posto.nome}</td>
                <td>{posto.cidade}</td>
                <td>{posto.horario}</td>
                <td>{posto.contacto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostosPublic;
