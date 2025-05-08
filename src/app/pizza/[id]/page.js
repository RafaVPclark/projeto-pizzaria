"use client";
import { useParams } from "next/navigation";
import { Container, Row, Col } from "reactstrap";
import styles from "../../../styles/DetalhesProduto.module.css";
import useFadeInObserver from "@/hooks/UseFadeInObserver";
import Link from "next/link";
import page from "../../popular-food/page";
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
export default function PizzaDetalhePage() {
  useFadeInObserver();
  const { id } = useParams();
  const pizza = pizzas.find((p) => p.id === parseInt(id));

  if (!pizza) return <p>Pizza não encontrada.</p>;

  return (
    <section className={`${styles.detalhes}`}>
      <Container fluid className="text-center p-0 fade-in">
        <Row>
          <Col md="6" className={`${styles.content}`}>
            <Row>
              <Col xs="8" className="text-start mx-auto fade-in">
                <Link href={`../../popular-food/`} legacyBehavior>
                  <a href="#" className={`${styles.link}`}>
                    <i
                      className={`bi bi-arrow-left-circle-fill mb-3 fade-in ${styles.icon}`}
                    ></i>
                  </a>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className={`${styles.h1} fade-in`}>{pizza.nome}</h1>
                <img
                  src={pizza.imagem}
                  alt={pizza.nome}
                  className={`${styles.img_custom} fade-in`}
                ></img>
                <p className="fade-in">
                  <strong>Ingredientes: </strong>{" "}
                  {pizza.ingredientes.join(", ")}
                </p>
                <p className="fade-in">
                  <strong>Preço P:</strong> R$ {pizza.precoP.toFixed(2)}
                </p>
                <p className="fade-in">
                  <strong>Preço M:</strong> R$ {pizza.precoM.toFixed(2)}
                </p>
                <p className="fade-in">
                  <strong>Preço G:</strong> R$ {pizza.precoG.toFixed(2)}
                </p>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <img
              src="../../../detalhesBackground.jpg"
              className="img-fluid fade-in"
            ></img>
          </Col>
        </Row>
      </Container>
    </section>

    // </div>
  );
}
