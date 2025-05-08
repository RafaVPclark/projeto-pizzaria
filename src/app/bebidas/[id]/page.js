"use client";
import { useParams } from "next/navigation";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import styles from "../../../styles/DetalhesProduto.module.css";
import useFadeInObserver from "@/hooks/UseFadeInObserver";
import { buscarDadosDaAPI } from "@/services/apiService";

const dados = await buscarDadosDaAPI("bebidas");
const bebidas = dados.map((bebidas) => ({
  id: bebidas.id,
  nome: bebidas.nome,
  descricao: bebidas.descricao,
  imagem: "../agua1.png",
  preco: bebidas.preco,
}));

export default function BebidaDetalhePage() {
  useFadeInObserver();
  const { id } = useParams();
  const bebida = bebidas.find((b) => b.id === parseInt(id));

  if (!bebida) return <p>Bebida não encontrada.</p>;

  return (
    <section className={styles.detalhes}>
      <Container fluid className="text-center p-0 fade-in">
        <Row>
          <Col md="6" className={styles.content}>
            <Link href="../../popular-food/" legacyBehavior>
              <a className={styles.link}>
                <i
                  className={`bi bi-arrow-left-circle-fill ${styles.icon}`}
                ></i>
              </a>
            </Link>
            <h1>{bebida.nome}</h1>
            <img
              src={bebida.imagem}
              alt={bebida.nome}
              className={styles.img_custom}
            />
            <p>
              <strong>Descrição:</strong> {bebida.descricao}
            </p>
            <p>
              <strong>Preço:</strong> R$ {bebida.preco}
            </p>
          </Col>
          <Col md="6">
            <img src="/detalhesBackground.jpg" className="img-fluid fade-in" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
