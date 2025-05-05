"use client"; // Necessário se estiver usando App Router no Next.js 13+

import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

import styles from "../styles/RoladorDePizzas.module.css";

export default function RoladorDePizzas({ titulo, idsDasPizzas }) {
  const pizzas = [
    {
      id: 1,
      nome: "Margherita",
      ingredientes: ["molho de tomate", "muçarela", "manjericão"],
      imagem: "/sn-pizza.png",
      precoP: 19.9,
      precoM: 29.9,
      precoG: 39.9,
    },
    {
      id: 2,
      nome: "Calabresa",
      ingredientes: ["molho de tomate", "muçarela", "calabresa", "cebola"],
      imagem: "/sn-pizza.png",
      precoP: 24.9,
      precoM: 34.9,
      precoG: 44.9,
    },
    {
      id: 3,
      nome: "Quatro Queijos",
      ingredientes: ["muçarela", "gorgonzola", "provolone", "parmesão"],
      imagem: "/sn-pizza.png",
      precoP: 29.9,
      precoM: 39.9,
      precoG: 49.9,
    },
  ];

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
    switch (tamanho) {
      case "P":
        return pizza.precoP;
      case "G":
        return pizza.precoG;
      default:
        return pizza.precoM;
    }
  };

  return (
    <section className={styles.rolador}>
      <Container>
        <h2 className="text-center pt-5 mb-5 fade-in">{titulo}</h2>
        <Row>
          {pizzasFiltradas.map((pizza) => {
            const tamanho = tamanhosSelecionados[pizza.id];
            const preco = getPreco(pizza, tamanho);

            return (
              <Col
                key={pizza.id}
                md="6"
                lg="4"
                className="mb-4 mx-auto fade-in"
              >
                <div className={`card ${styles.card_custom} mx-auto fade-in`}>
                  <Link href={`/pizza/${pizza.id}`} legacyBehavior>
                    <a style={{ textDecoration: "none", color: "inherit" }}>
                      <img
                        src={pizza.imagem}
                        className="card-img-top fade-in"
                        alt={pizza.nome}
                      />
                    </a>
                  </Link>

                  <div className="card-body text-center">
                    <h4 className="card-title fade-in">{pizza.nome}</h4>
                    <p className="card-text fade-in">
                      {pizza.ingredientes.join(", ")}
                    </p>

                    <div className="mb-3">
                      {["P", "M", "G"].map((t) => (
                        <button
                          key={t}
                          className={`btn ${styles.btn_custom} me-2  ${
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
                      <strong>Preço:</strong> R$ {preco.toFixed(2)}
                    </p>

                    <Link href={`/pizza/${pizza.id}`} legacyBehavior>
                      <a className={`${styles.btn_custom2} btn fade-in"`}>
                        Ver detalhess
                      </a>
                    </Link>
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
