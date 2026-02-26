import { useEffect, useState } from "react";
import { getEducacaoPublica } from "../api/quiz";

const EducacaoPublic = () => {
  const [topicos, setTopicos] = useState([]);

  useEffect(() => {
    getEducacaoPublica().then(setTopicos);
  }, []);

  return (
    <div className="card page-grid">
      <h1>Conteudos educativos</h1>
      <p>Boas praticas para preparar e recuperar da dadiva.</p>
      <ul>
        {topicos.map((topico) => (
          <li key={topico}>{topico}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducacaoPublic;
