import { Container, Row, Col } from "reactstrap";
import styles from "../styles/IntersecaoTitulo.module.css";

export default function IntersecaoTitulo({ conteudo, background_url }) {
  return (
    <section
      className={`${styles.intersecao} d-flex text-center`}
      style={{ backgroundImage: `url(${background_url})` }}
    >
      <Container fluid className="align-self-center">
        <Row>
          <Col>
            <h1 className={`${styles.destaque} fade-in`}>{conteudo}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
