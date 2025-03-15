export async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    cache: "no-store", // Evita cache no SSR
    credentials: "include", // Inclui cookies
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null); // Tenta obter detalhes do erro
    console.error(`Erro na API: ${response.status} - ${errorData?.message || "Erro desconhecido"}`)
    throw new Error(errorData?.message || "Erro desconhecido");
  }

  return response.json() as Promise<T>;
}