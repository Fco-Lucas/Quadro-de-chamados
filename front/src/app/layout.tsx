import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/themeProvider";

export const metadata: Metadata = {
  title: "Quadro de chamados",
  description: "Gerado por Francisco Lucas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="bg-background text-foreground antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> 
            {children}
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
