"use client"

import { QueryClient, QueryClientProvider as ClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export function QueryClientProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minuto
        retry: 2,
        refetchOnWindowFocus: false
      }
    }
  }))

  return (
    <ClientProvider client={queryClient}>
      {children}
    </ClientProvider>
  )
}