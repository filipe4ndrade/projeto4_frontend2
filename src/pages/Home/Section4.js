import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promoção" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nada une as pessoas como um bom hambúrguer</h2>
              <p>
                Desde a escolha do pão artesanal até o ponto perfeito da carne, 
                cada detalhe é pensado para criar momentos memoráveis. Nossa missão 
                é transformar uma simples refeição em um banquete de sabores 
                que aproximam amigos e família.
              </p>
              <ul>
                <li>
                  <p>
                    Ingredientes frescos selecionados diariamente de produtores locais.
                  </p>
                </li>
                <li>
                  <p>Blend de carnes nobres com moagem exclusiva da casa.</p>
                </li>
                <li>
                  <p>
                    Maioneses e molhos artesanais preparados sem conservantes, 
                    garantindo o verdadeiro sabor caseiro.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
