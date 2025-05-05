import { Container, Row, Col } from "reactstrap";
import styles from "../styles/SpecialOffer.module.css";
export default function SpecialOffer(params) {
  return (
    <section className={`${styles.background} ${styles.special_offer} d-flex `}>
      <Container fluid className="align-self-center">
        <Row>
          <Col xs="8" md="8" className="mx-auto">
            <Row>
              <Col
                md="7"
                className="text-center text-md-end me-auto mt-4 fade-in"
              >
                <h1 className={`${styles.titulo_logo} fade-in`}>Stragni</h1>
                <h1>Pizza Special Offer</h1>
                <p>
                  Aproveite nossa promoção exclusiva: pizzas artesanais com 30%
                  de desconto por tempo limitado!
                </p>
                <a className={`btn ${styles.btn_custom} fade-in`}>Saiba mais</a>
              </Col>
              <Col md="4" className=" mt-4 mt-md-0 fade-in">
                <img src="/pizza-specialOffer.png" className="img-fluid"></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
