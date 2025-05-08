import { Container, Row, Col } from "reactstrap";
import styles from "../styles/PopularFood.module.css";
import { buscarDadosDaAPI } from "@/services/apiService";
import Link from "next/link";

const dados = await buscarDadosDaAPI();

export default function PopularFood() {
  return (
    <section className={`${styles.popular_food} d-flex pb-5 pt-5`}>
      <Container className="align-self-center">
        <Row>
          <Col className="text-center">
            <h1 className={`${styles.titulo_logo} fade-in`}>Stragni</h1>
            <h1 className="fade-in">Popular food</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          {dados?.map((pizza) => (
            <Col key={pizza.id} className="mt-4 mt-md-0">
              <div
                className={`card ${styles.card_custom} mx-auto mt-4 fade-in`}
              >
                <img
                  src="/so-pizza1.jpg"
                  className={`card-img-top ${styles.img_custom}`}
                  alt={`Imagem de ${pizza.nome}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{pizza.nome}</h5>
                  <p className="card-text">R$ {pizza.precop}</p>
                  <Link
                    href="/popular-food"
                    className={`btn ${styles.btn_custom} fade-in`}
                  >
                    Veja Mais
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Link
            href="/popular-food"
            className={`btn mx-auto ${styles.btn_custom} fade-in`}
          >
            Veja todas as pizzas
          </Link>
        </Row>
      </Container>
    </section>
  );
}
