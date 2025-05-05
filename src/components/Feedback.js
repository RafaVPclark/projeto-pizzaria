import { Container, Row, Col } from "reactstrap";
import styles from "../styles/Feedback.module.css";

export default function Feedback() {
  return (
    <section className={`${styles.feedback} pb-5`}>
      <Container>
        <Row>
          <Col className="text-center mt-5 fade-in">
            <h1 className={`${styles.titulo_logo} fade-in`}>Stragni</h1>
            <h1>Feedback dos clientes</h1>
          </Col>
        </Row>
        <Row className="mt-5 fade-in">
          <Col md="6" xs="10" className="mx-auto fade-in">
            <Row>
              <Col md="6" className="mt-4 fade-in">
                <h4>Mariana Costa</h4>
                <h5>Nota: ★★★★★</h5>
                <p>
                  A melhor pizza que já comi! Massa leve, ingredientes super
                  frescos e um atendimento impecável. A Stragni virou meu lugar
                  favorito para os fins de semana!
                </p>
              </Col>
              <Col md="6" className="mt-4 fade-in">
                <h4>Lucas Almeida</h4>
                <h5>Nota: ★★★★☆</h5>
                <p>
                  Ambiente acolhedor e pizzas deliciosas! Só não dei cinco
                  estrelas porque queria mais opções veganas, mas voltarei com
                  certeza.
                </p>
              </Col>
              <Col md="6" className="mt-4 fade-in">
                <h4>Ana Beatriz</h4>
                <h5>Nota: ★★★★★</h5>
                <p>
                  Atendimento rápido e cordial, e a pizza de quatro queijos é
                  simplesmente divina. Recomendo de olhos fechados!
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs="8" md="6" className="mx-auto mt-3 fade-in">
            <img
              src="/fb-pizza1.png"
              className="img-fluid"
              alt="Pizza deliciosa da Stragni"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
