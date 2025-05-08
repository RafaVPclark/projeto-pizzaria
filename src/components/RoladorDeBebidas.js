import { useState } from "react";
import { useCarrinho } from "@/context/CarrinhoContext";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/RoladorDeBebidas.module.css";
import Link from "next/link";
import { buscarDadosDaAPI } from "@/services/apiService";
const dados = await buscarDadosDaAPI("bebidas");
const bebidas = dados.map((bebidas) => ({
  id: bebidas.id,
  nome: bebidas.nome,
  descricao: bebidas.descricao,
  imagem: "agua1.png",
  preco: bebidas.preco,
}));
export default function RoladorDeBebidas() {
  const { adicionarAoCarrinho } = useCarrinho();
  const handleClick = (bebida) => {
    adicionarAoCarrinho({
      id: bebida.id,
      nome: bebida.nome,
      preco: bebida.preco,
      quantidade: 1,
    });
  };
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
                  <strong>R$ {bebida.preco}</strong>
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
