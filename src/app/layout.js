import "@/styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarrinhoProvider } from "@/context/CarrinhoContext";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.12.1/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        <CarrinhoProvider>{children}</CarrinhoProvider>
      </body>
    </html>
  );
}
