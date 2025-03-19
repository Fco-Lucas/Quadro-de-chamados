const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiServer = async <T>(method: string, endpoint: string, options: RequestInit = {}): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data: T = await response.json();

    if (!response.ok) throw new Error((data as any)?.message || `Exceção não tratada`);

    return data;
  } catch (err: any) {
    throw new Error(`Erro na API: ${err.message}`);
  }
};

export default apiServer;
