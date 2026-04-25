import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>Nossa Garantia</h4>
            <h2>Entrega em até 30 Minutos!</h2>
            <p>
              Seu hambúrguer quentinho ou seu dinheiro de volta. Temos uma equipe 
              de entrega dedicada para garantir que sua fome seja atendida com 
              rapidez, qualidade e o máximo de sabor, onde quer que você esteja.
            </p>
            <Link to="tel:9998887777" className="btn btn_red px-4 py-2 rounded-0">
              Ligar Agora: (11) 99999-8888
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
