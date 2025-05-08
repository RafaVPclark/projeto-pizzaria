import { Container, Row, Col } from "reactstrap";
import styles from "../styles/SobreNos.module.css";
export default function SobreNos() {
  return (
    <section className={`${styles.sobre_nos} d-flex`}>
      <Container className="align-self-center">
        <Row>
          <Col md="6" className="text-center">
            <img src="./sn-pizza.png" className="img-fluid fade-in"></img>
          </Col>
          <Col xs="10" md="6" className=" align-self-center mx-auto fade-in">
            <h1>Sobre nós</h1>
            <p>
              A Stragni nasceu da paixão por pizzas artesanais feitas com
              ingredientes frescos e selecionados. Nosso objetivo é oferecer uma
              experiência única a cada mordida, unindo tradição italiana e
              sabores inovadores. Cada pizza é preparada com massa de
              fermentação natural e assada em forno de pedra, garantindo
              crocância e sabor incomparáveis. Na Stragni, não servimos apenas
              comida, servimos momentos de prazer e autenticidade.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
