import { fetchPublic } from "./user";

export const getQuizPublico = async () =>
  fetchPublic("/quiz", {
    perguntas: [
      "Tem entre 18 e 65 anos?",
      "Tem mais de 50kg?",
      "Passaram mais de 8 semanas desde a ultima doacao?",
    ],
  });

export const getEducacaoPublica = async () =>
  fetchPublic("/educacao", [
    "Hidrate-se antes da doacao.",
    "Evite jejum prolongado antes de doar.",
    "Descanse e evite esforco intenso nas horas seguintes.",
  ]);
