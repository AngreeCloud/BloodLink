import { useEffect, useState } from "react";
import { getQuizPublico } from "../api/quiz";

const QuizPublic = () => {
  const [quiz, setQuiz] = useState({ perguntas: [] });

  useEffect(() => {
    getQuizPublico().then(setQuiz);
  }, []);

  return (
    <div className="card page-grid">
      <h1>Quiz · Posso Doar?</h1>
      <p>Checklist rapida de elegibilidade inicial (informativo).</p>
      <ol>
        {quiz.perguntas.map((pergunta) => (
          <li key={pergunta}>{pergunta}</li>
        ))}
      </ol>
    </div>
  );
};

export default QuizPublic;
