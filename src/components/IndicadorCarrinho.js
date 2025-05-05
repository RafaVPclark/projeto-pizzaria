"use client";
import { useCarrinho } from "@/context/CarrinhoContext";
import { useState } from "react";

export default function IndicadorCarrinho() {
  const { carrinho } = useCarrinho();
  const [mostrarResumo, setMostrarResumo] = useState(false);

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          background: "white",
          padding: "10px 20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          zIndex: 1000,
          cursor: "pointer",
        }}
        onClick={() => setMostrarResumo(!mostrarResumo)}
      >
        🛒 {carrinho.length} item(s) - R$ {total.toFixed(2)}
      </div>

      {mostrarResumo && (
        <div
          style={{
            position: "fixed",
            top: 70,
            right: 20,
            background: "#fff",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "280px",
            zIndex: 1000,
            boxShadow: "0 0 10px rgba(0,0,0,0.15)",
          }}
        >
          <h5>Carrinho</h5>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {carrinho.map((item, i) => (
              <li key={i}>
                {item.nome} ({item.tamanho}) - R$ {item.preco.toFixed(2)}
              </li>
            ))}
          </ul>
          <hr />
          <strong>Total: R$ {total.toFixed(2)}</strong>
        </div>
      )}
    </>
  );
}
