const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const buildHeaders = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const safeFetch = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, options);

  if (response.status === 401) {
    const authError = new Error("Token invalido ou expirado.");
    authError.code = "UNAUTHORIZED";
    throw authError;
  }

  if (!response.ok) {
    throw new Error(`Pedido falhou (${response.status}) em ${path}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

export const fetchPublic = async (path, fallbackData) => {
  try {
    return await safeFetch(path, { method: "GET" });
  } catch {
    return fallbackData;
  }
};

export const fetchPrivate = async (path, token, fallbackData) => {
  try {
    return await safeFetch(path, {
      method: "GET",
      headers: buildHeaders(token),
    });
  } catch (error) {
    if (error?.code === "UNAUTHORIZED") {
      throw error;
    }

    return fallbackData;
  }
};

export const postLogin = async ({ email, password }) => {
  try {
    return await safeFetch("/login", {
      method: "POST",
      headers: buildHeaders(),
      body: JSON.stringify({ email: email?.trim(), password }),
    });
  } catch {
    if (!email || !password) {
      throw new Error("Credenciais invalidas.");
    }

    return {
      token: "mock-token-bloodlink",
      user: { email: email.trim(), fullName: "Utilizador BloodLink" },
    };
  }
};

export const postRegisto = async (payload) => {
  try {
    return await safeFetch("/registo", {
      method: "POST",
      headers: buildHeaders(),
      body: JSON.stringify(payload),
    });
  } catch {
    return {
      token: "mock-token-bloodlink",
      user: {
        email: payload.email?.trim(),
        fullName: payload.profile?.fullName,
      },
    };
  }
};

export const getPerfil = async (token) =>
  fetchPrivate("/perfil", token, {
    nome: "Utilizador BloodLink",
    email: "utilizador@bloodlink.pt",
    grupo: "O+",
    preferencia: "Notificacoes por email",
  });

export const getHistorico = async (token) =>
  fetchPrivate("/historico", token, [
    { id: "HD-001", data: "2025-11-10", local: "Centro Regional Norte", tipo: "Sangue total" },
    { id: "HD-002", data: "2025-07-02", local: "Hospital Santa Maria", tipo: "Plasma" },
  ]);

export const getGamificacao = async (token) =>
  fetchPrivate("/gamificacao", token, {
    pontos: 1280,
    medalhas: ["Dador Regular", "Impacto Comunitario"],
    proximaMeta: "1500 pontos",
  });

export const getNotificacoesPersonalizadas = async (token) =>
  fetchPrivate("/notificacoes-personalizadas", token, [
    "Nova campanha perto da sua area.",
    "Ja pode agendar a sua proxima doacao.",
  ]);
