"use client";
import { useCarrinho } from "@/context/CarrinhoContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IndicadorCarrinho() {
  const { carrinho, removerDoCarrinho } = useCarrinho();
  const [mostrarResumo, setMostrarResumo] = useState(false);
  const router = useRouter();

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
        <i className="bi bi-cart me-3"></i> {carrinho.length} item(s) - R${" "}
        {total}
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
              <li key={i} style={{ marginBottom: "10px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>
                    {item.nome} ({item.tamanho}) - R$ {item.preco}
                  </span>
                  <button
                    onClick={() => removerDoCarrinho(i)}
                    style={{
                      marginLeft: "10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "2px 6px",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <hr />
          <strong>Total: R$ {total}</strong>
          <br />
          <button
            onClick={() => router.push("../pagamento")}
            style={{
              marginTop: "10px",
              backgroundColor: "#0070f3",
              color: "#fff",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Finalizar Pedido
          </button>
        </div>
      )}
    </>
  );
}
