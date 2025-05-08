"use client";
import { useCarrinho } from "@/context/CarrinhoContext";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import styles from "../styles/RoladorDePizzas.module.css";
import { buscarDadosDaAPI } from "@/services/apiService";
const dados = await buscarDadosDaAPI("pizzas");
console.log(dados);
const pizzas = dados.map((pizza) => ({
  id: pizza.id,
  nome: pizza.nome,
  ingredientes: pizza.ingredientes,
  imagem: "/sn-pizza.png", // Se todas tiverem a mesma imagem por enquanto
  precoP: parseFloat(pizza.precop),
  precoM: parseFloat(pizza.precom),
  precoG: parseFloat(pizza.precog),
}));
export default function RoladorDePizzas({ titulo, idsDasPizzas }) {
  const { adicionarAoCarrinho } = useCarrinho();

  const pizzasFiltradas = pizzas.filter((pizza) =>
    idsDasPizzas.includes(pizza.id)
  );

  const [tamanhosSelecionados, setTamanhosSelecionados] = useState(
    pizzasFiltradas.reduce((acc, pizza) => {
      acc[pizza.id] = "M";
      return acc;
    }, {})
  );

  const handleTamanhoClick = (id, tamanho) => {
    setTamanhosSelecionados((prev) => ({ ...prev, [id]: tamanho }));
  };

  const getPreco = (pizza, tamanho) => {
    if (!pizza || !tamanho) return 0;

    switch (tamanho) {
      case "P":
        return pizza.precoP ?? 0;
      case "G":
        return pizza.precoG ?? 0;
      case "M":
      default:
        return pizza.precoM ?? 0;
    }
  };

  const handleClick = (pizza) => {
    const tamanho = tamanhosSelecionados[pizza.id];
    const preco = getPreco(pizza, tamanho);

    adicionarAoCarrinho({
      id: pizza.id,
      nome: pizza.nome,
      preco: preco,
      tamanho: tamanho,
      quantidade: 1,
    });
  };

  return (
    <section className={styles.rolador}>
      <Container>
        <h2 className="text-center pt-5 mb-5">{titulo}</h2>
        <Row>
          {pizzasFiltradas.map((pizza) => {
            const tamanho = tamanhosSelecionados[pizza.id];
            const preco = getPreco(pizza, tamanho);

            return (
              <Col key={pizza.id} md="6" lg="4" className="mb-4 mx-auto">
                <div className={`card ${styles.card_custom} mx-auto`}>
                  <Link href={`/pizza/${pizza.id}`} legacyBehavior>
                    <a style={{ textDecoration: "none", color: "inherit" }}>
                      <img
                        src={pizza.imagem}
                        className="card-img-top"
                        alt={pizza.nome}
                      />
                    </a>
                  </Link>

                  <div className="card-body text-center">
                    <h4 className="card-title">{pizza.nome}</h4>
                    <p className="card-text">{pizza.ingredientes.join(", ")}</p>

                    <div className="mb-3">
                      {["P", "M", "G"].map((t) => (
                        <button
                          key={t}
                          className={`btn ${styles.btn_custom} me-2 ${
                            tamanho === t
                              ? "btn-primary"
                              : "btn-outline-secondary"
                          }`}
                          onClick={() => handleTamanhoClick(pizza.id, t)}
                          type="button"
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <p>
                      <strong>Tamanho selecionado:</strong> {tamanho}
                    </p>
                    <p>
                      <strong>Preço:</strong> R${" "}
                      {typeof preco === "number" ? preco.toFixed(2) : "N/A"}
                    </p>
                    <div className="mb-4">
                      <Link href={`/pizza/${pizza.id}`} legacyBehavior>
                        <a
                          className={`btn ${styles.btn_custom2}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Veja mais
                        </a>
                      </Link>
                    </div>
                    <button
                      className="btn btn-success"
                      onClick={() => handleClick(pizza)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
