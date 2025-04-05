"use client"

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import Cookies from "js-cookie";

// Configuração centralizada
const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
};

// Função para tratar erros de forma consistente
const handleApiError = (error: AxiosError): Promise<never> => {
  const responseData = error.response?.data as { message?: string } | undefined;
  const message = responseData?.message || error.message || "Erro desconhecido";
  const statusCode = error.response?.status;
  const url = error.config?.url;

  console.error("Erro na API:", {
    message,
    statusCode,
    url,
    error: error.toJSON(),
  });

  return Promise.reject(new Error(message));
};

// Criação do cliente API
const apiClient: AxiosInstance = axios.create(API_CONFIG);

// Interceptor de requisição para adicionar o token ao cabeçalho
apiClient.interceptors.request.use((config) => {
  const authToken = Cookies.get('authToken');
  
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

// Interceptor de resposta
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => handleApiError(error)
);

export default apiClient;