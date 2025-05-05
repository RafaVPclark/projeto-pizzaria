import { Container, Row, Col } from "reactstrap";
import styles from "../styles/PopularFood.module.css";
// import IndicadorCarrinho from "@/components/IndicadorCarrinho";
import Link from "next/link";
export default function PopularFood(params) {
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
          {/* Card1 */}
          <Col>
            <div className={`card ${styles.card_custom} mx-auto fade-in`}>
              <img
                src="/so-pizza1.jpg"
                className={`card-img-top ${styles.img_custom}`}
              ></img>
              <div className="card-body">
                <h5 className="card-title">Pizza1</h5>
                <p className="card-text">R$ 58.90</p>
                <a
                  href="#"
                  className={`btn ${styles.btn_custom} fade-infade-in`}
                >
                  Fazer pedido
                </a>
              </div>
            </div>
          </Col>
          {/* Card2 */}
          <Col>
            <div
              className={`card ${styles.card_custom} mx-auto mt-4 mt-md-0 fade-in`}
            >
              <img
                src="/so-pizza1.jpg"
                className={`card-img-top ${styles.img_custom}`}
              ></img>
              <div className="card-body">
                <h5 className="card-title">Pizza1</h5>
                <p className="card-text">R$ 58.90</p>
                <a href="#" className={`btn ${styles.btn_custom} fade-in`}>
                  Fazer pedido
                </a>
              </div>
            </div>
          </Col>
          {/* Card3 */}
          <Col>
            <div
              className={`card ${styles.card_custom} mx-auto mt-4 mt-md-0 fade-in`}
            >
              <img
                src="/so-pizza1.jpg"
                className={`card-img-top ${styles.img_custom}`}
              ></img>
              <div className="card-body">
                <h5 className="card-title">Pizza1</h5>
                <p className="card-text">R$ 58.90</p>
                <a href="#" className={`btn ${styles.btn_custom} fade-in`}>
                  Fazer pedido
                </a>
              </div>
            </div>
          </Col>
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
