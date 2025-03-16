"use client"; 

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = 'Quadro de chamados';

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <title>{title}</title>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className="font-poppins bg-gray-100">
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-right" />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}