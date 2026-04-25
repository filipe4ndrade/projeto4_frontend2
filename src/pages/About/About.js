import React, { useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/AboutStyle.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="about-section">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="about-image">
                <img
                  src={require("../../assets/about/about-1.jpg")}
                  alt="Sobre a Hamburgueria"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <h2 className="mb-4">Nossa História</h2>
                <p>
                  Desde 2015, a Hamburgueria Digital tem sido sinônimo de qualidade e sabor. 
                  Nossa jornada começou com um sonho simples: criar os melhores hambúrgueres 
                  artesanais da cidade, feitos com ingredientes frescos e selecionados.
                </p>
                <p>
                  Ao longo dos anos, conquistamos o coração de milhares de clientes que 
                  buscam não apenas uma refeição, mas uma experiência gastronômica única. 
                  Cada hambúrguer é preparado com paixão e dedicação pela nossa equipe especializada.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={12}>
              <div className="mission-section text-center">
                <h2 className="mb-5">Nossos Valores</h2>
              </div>
            </Col>
          </Row>

          <Row className="values-row mb-5">
            <Col md={4} className="mb-4">
              <div className="value-card text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-heart-fill fs-1 text-danger"></i>
                </div>
                <h4>Qualidade</h4>
                <p>
                  Ingredientes frescos e selecionados diariamente para garantir 
                  o melhor sabor em cada mordida.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="value-card text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-people-fill fs-1 text-primary"></i>
                </div>
                <h4>Atendimento</h4>
                <p>
                  Nossa equipe está sempre pronta para proporcionar a melhor 
                  experiência para nossos clientes.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="value-card text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-star-fill fs-1 text-warning"></i>
                </div>
                <h4>Excelência</h4>
                <p>
                  Buscamos constantemente a perfeição em cada detalhe, 
                  do preparo à entrega.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="team-section">
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2>Nossa Equipe</h2>
                <p className="lead">
                  Profissionais apaixonados que trabalham todos os dias para 
                  trazer o melhor para você.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={3} sm={6} className="mb-4">
              <div className="team-member text-center">
                <div className="team-image mb-3">
                  <img
                    src={require("../../assets/about/pizza.png")}
                    alt="Chef Principal"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Carlos Silva</h5>
                <p className="text-muted">Chef Principal</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="team-member text-center">
                <div className="team-image mb-3">
                  <img
                    src={require("../../assets/about/salad.png")}
                    alt="Sous Chef"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Ana Santos</h5>
                <p className="text-muted">Sous Chef</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="team-member text-center">
                <div className="team-image mb-3">
                  <img
                    src={require("../../assets/about/delivery-bike.png")}
                    alt="Gerente"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>João Oliveira</h5>
                <p className="text-muted">Gerente</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="team-member text-center">
                <div className="team-image mb-3">
                  <img
                    src={require("../../assets/about/about-1.jpg")}
                    alt="Atendimento"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h5>Maria Costa</h5>
                <p className="text-muted">Atendimento</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
