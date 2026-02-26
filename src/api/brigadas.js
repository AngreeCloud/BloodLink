import { fetchPublic } from "./user";

export const getBrigadasPublicas = async () =>
  fetchPublic("/brigadas", [
    { id: "BG-01", local: "Universidade do Minho", data: "2026-01-25", capacidade: 80, estado: "Aberta" },
    { id: "BG-02", local: "Praca do Comercio", data: "2026-02-02", capacidade: 120, estado: "Lotada" },
  ]);
