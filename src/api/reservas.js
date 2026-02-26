import { fetchPublic } from "./user";

export const getReservasPublicas = async () =>
  fetchPublic("/reservas", [
    { id: "RS-2026-01", tipo: "O+", quantidade: 4, data: "2026-01-18", estado: "Confirmada" },
    { id: "RS-2026-02", tipo: "A-", quantidade: 2, data: "2026-01-20", estado: "Pendente" },
    { id: "RS-2026-03", tipo: "B+", quantidade: 6, data: "2026-01-20", estado: "Cancelada" },
  ]);
