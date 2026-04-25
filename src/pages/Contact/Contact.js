import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "../../styles/ContactStyle.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (formData.phone && !/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Telefone inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Formulário válido - enviar dados
      console.log("Dados do formulário:", formData);
      
      // Resetar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setSubmitted(true);
      setShowAlert(true);
      setErrors({});

      // Aqui você implementaria a lógica real de envio
      // Por exemplo: enviar para uma API, Firebase, etc.
    } else {
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  return (
    <Layout>
      <section className="contact-section">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h1 className="contact-title">Entre em Contato</h1>
              <p className="contact-subtitle">
                Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir você!
              </p>
            </Col>
          </Row>

          {showAlert && submitted && (
            <Row>
              <Col lg={8} className="mx-auto mb-4">
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  <Alert.Heading>Mensagem enviada com sucesso!</Alert.Heading>
                  <p>
                    Obrigado por entrar em contato. Responderemos em breve!
                  </p>
                </Alert>
              </Col>
            </Row>
          )}

          <Row>
            <Col lg={8} className="mx-auto">
              <div className="contact-form-wrapper">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formName">
                        <Form.Label>Nome Completo *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Digite seu nome"
                          isInvalid={!!errors.name}
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label>E-mail *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          isInvalid={!!errors.email}
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formPhone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          isInvalid={!!errors.phone}
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formSubject">
                        <Form.Label>Assunto</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="duvida">Dúvida</option>
                          <option value="sugestao">Sugestão</option>
                          <option value="reclamacao">Reclamação</option>
                          <option value="elogio">Elogio</option>
                          <option value="outros">Outros</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="mb-3">
                      <Form.Group controlId="formMessage">
                        <Form.Label>Mensagem *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Digite sua mensagem aqui..."
                          isInvalid={!!errors.message}
                          className="form-input"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="text-center">
                      <Button variant="danger" type="submit" className="submit-btn">
                        <i className="bi bi-send me-2"></i>
                        Enviar Mensagem
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={4} md={6} className="mb-4">
              <div className="contact-info-card text-center">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <h5>Endereço</h5>
                <p>Rua dos Hambúrgueres, 123<br />Centro, Cidade - UF<br />CEP: 12345-678</p>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <div className="contact-info-card text-center">
                <div className="contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <h5>Telefone</h5>
                <p>(11) 1234-5678<br />(11) 98765-4321<br />Seg-Dom: 11h às 23h</p>
              </div>
            </Col>

            <Col lg={4} md={12} className="mb-4">
              <div className="contact-info-card text-center">
                <div className="contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <h5>E-mail</h5>
                <p>contato@hamburgueria.com<br />pedidos@hamburgueria.com<br />Respondemos em 24h</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
