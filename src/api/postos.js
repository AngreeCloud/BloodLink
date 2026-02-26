import { fetchPublic } from "./user";

export const getPostosPublicos = async () =>
  fetchPublic("/postos", [
    { id: "PT-01", nome: "Centro Regional Norte", cidade: "Porto", horario: "08h - 18h", contacto: "22 000 000" },
    { id: "PT-02", nome: "Hospital Santa Maria", cidade: "Lisboa", horario: "09h - 17h", contacto: "21 000 000" },
    { id: "PT-03", nome: "Posto de Faro", cidade: "Faro", horario: "07h - 15h", contacto: "28 000 000" },
  ]);
