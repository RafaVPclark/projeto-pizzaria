import { useState } from "react";
import { useCarrinho } from "@/context/CarrinhoContext";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/RoladorDeBebidas.module.css";
import Link from "next/link";
export default function RoladorDeBebidas() {
  const { adicionarAoCarrinho } = useCarrinho();
  const bebidas = [
    {
      id: 1,
      nome: "Água Mineral",
      descricao: "Água sem gás, 500ml",
      imagem: "/agua1.png",
      preco: 4.5,
    },
    {
      id: 2,
      nome: "Refrigerante",
      descricao: "Lata 350ml - vários sabores",
      imagem: "/agua1.png",
      preco: 6.0,
    },
    {
      id: 3,
      nome: "Suco Natural",
      descricao: "Suco de laranja natural 300ml",
      imagem: "/agua1.png",
      preco: 7.5,
    },
  ];
  const handleClick = (bebida) => {
    console.log(bebida.preco);
    adicionarAoCarrinho({
      id: bebida.id,
      nome: bebida.nome,
      preco: bebida.preco,
      quantidade: 1,
    });
  };
  // console.log(bebida.preco);
  return (
    <section className={`${styles.bebidas} d-flex`}>
      <Container className="align-self-center">
        <Row>
          {bebidas.map((bebida) => (
            <Col
              key={bebida.id}
              md="3"
              className={`mx-auto mb-4 mt-5 pt-5  fade-in`}
            >
              <div
                className={`card_custom ${styles.card_custom} text-center p-4 fade-in`}
              >
                <img
                  src={bebida.imagem}
                  alt={bebida.nome}
                  className="img-fluid mb-4 fade-in"
                />
                <h4>{bebida.nome}</h4>
                <p>{bebida.descricao}</p>
                <p>
                  <strong>R$ {bebida.preco.toFixed(2)}</strong>
                </p>
                <div>
                  <Link href={`/bebidas/${bebida.id}`} legacyBehavior>
                    <a className={`btn ${styles.btn_custom}`}>Ver mais</a>
                  </Link>
                </div>

                <button
                  className={`btn ${styles.btn_custom_cart}`}
                  onClick={() => handleClick(bebida)}
                >
                  <i className="bi bi-cart-plus-fill"></i>
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
