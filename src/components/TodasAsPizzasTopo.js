import { Container, Row, Col } from "reactstrap";
import styles from "../styles/TodasAsPizzas.module.css";

export default function TodasAsPizzas(params) {
  return (
    <section className={`${styles.topo} d-flex `}>
      <Container fluid className="align-self-center">
        <Row>
          <Col md="10" className="mx-auto margin">
            <h1 className={`${styles.title} fade-in`}>Pizzas || Bebidas</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
