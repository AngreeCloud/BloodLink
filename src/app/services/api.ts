export interface Reserva {
  id: string;
  tipo: string;
  quantidade: number;
  data: string;
  estado: "Confirmada" | "Pendente" | "Cancelada";
}

export interface Posto {
  id: string;
  nome: string;
  cidade: string;
  horario: string;
  contacto: string;
}

export interface Brigada {
  id: string;
  local: string;
  data: string;
  capacidade: number;
  estado: "Aberta" | "Lotada";
}

export interface Elegibilidade {
  ultimoAgendamento: string;
  podeDoar: boolean;
  recomendacao: string;
}

export const getReservas = async (): Promise<Reserva[]> => {
  return [
    {
      id: "RS-2026-01",
      tipo: "O+",
      quantidade: 4,
      data: "2026-01-18",
      estado: "Confirmada",
    },
    {
      id: "RS-2026-02",
      tipo: "A-",
      quantidade: 2,
      data: "2026-01-20",
      estado: "Pendente",
    },
    {
      id: "RS-2026-03",
      tipo: "B+",
      quantidade: 6,
      data: "2026-01-20",
      estado: "Cancelada",
    },
  ];
};

export const getPostos = async (): Promise<Posto[]> => {
  return [
    {
      id: "PT-01",
      nome: "Centro Regional Norte",
      cidade: "Porto",
      horario: "08h - 18h",
      contacto: "22 000 000",
    },
    {
      id: "PT-02",
      nome: "Hospital Santa Maria",
      cidade: "Lisboa",
      horario: "09h - 17h",
      contacto: "21 000 000",
    },
    {
      id: "PT-03",
      nome: "Posto de Faro",
      cidade: "Faro",
      horario: "07h - 15h",
      contacto: "28 000 000",
    },
  ];
};

export const getBrigadas = async (): Promise<Brigada[]> => {
  return [
    {
      id: "BG-01",
      local: "Universidade do Minho",
      data: "2026-01-25",
      capacidade: 80,
      estado: "Aberta",
    },
    {
      id: "BG-02",
      local: "Praca do Comercio",
      data: "2026-02-02",
      capacidade: 120,
      estado: "Lotada",
    },
  ];
};

export const getElegibilidade = async (): Promise<Elegibilidade> => {
  return {
    ultimoAgendamento: "2025-12-15",
    podeDoar: true,
    recomendacao: "Elegivel para nova doacao a partir de 2026-02-10.",
  };
};
