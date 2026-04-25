import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "../../styles/BlogStyle.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulando dados de posts do blog
    const blogPosts = [
      {
        id: 1,
        title: "O Segredo do Hambúrguer Perfeito",
        excerpt: "Descubra as técnicas que usamos para criar hambúrgueres suculentos e saborosos...",
        content: "A arte de fazer um hambúrguer perfeito vai além de simplesmente grelhar a carne.",
        image: require("../../assets/blog/reviews.jpg"),
        author: "Chef Carlos",
        date: "15 de Março, 2024",
        category: "Receitas",
        readTime: "5 min"
      },
      {
        id: 2,
        title: "Novos Sabores na Casa",
        excerpt: "Conheça as novidades que preparamos especialmente para você neste mês...",
        content: "Estamos sempre inovando para trazer novas experiências gastronômicas.",
        image: require("../../assets/menu/ads-1.jpg"),
        author: "Equipe Marketing",
        date: "10 de Março, 2024",
        category: "Novidades",
        readTime: "3 min"
      },
      {
        id: 3,
        title: "A História dos Hambúrgueres",
        excerpt: "Uma jornada pela origem de um dos pratos mais amados do mundo...",
        content: "O hambúrguer tem uma história rica e fascinante que atravessa continentes.",
        image: require("../../assets/menu/ads-2.jpg"),
        author: "Ana Santos",
        date: "5 de Março, 2024",
        category: "Curiosidades",
        readTime: "7 min"
      },
      {
        id: 4,
        title: "Dicas para Harmonização",
        excerpt: "Aprenda a combinar seu hambúrguer com a bebida perfeita...",
        content: "A escolha da bebida certa pode elevar a experiência de degustar um hambúrguer.",
        image: require("../../assets/about/about-1.jpg"),
        author: "João Oliveira",
        date: "1 de Março, 2024",
        category: "Dicas",
        readTime: "4 min"
      },
      {
        id: 5,
        title: "Nosso Compromisso com a Qualidade",
        excerpt: "Entenda como selecionamos nossos fornecedores e ingredientes...",
        content: "A qualidade começa na escolha dos melhores ingredientes disponíveis.",
        image: require("../../assets/blog/review-author-1.jpg"),
        author: "Chef Carlos",
        date: "25 de Fevereiro, 2024",
        category: "Empresa",
        readTime: "6 min"
      },
      {
        id: 6,
        title: "Eventos Especiais de Abril",
        excerpt: "Confira a programação de eventos e promoções para o próximo mês...",
        content: "Abril será um mês repleto de surpresas e eventos especiais.",
        image: require("../../assets/blog/review-author-2.jpg"),
        author: "Maria Costa",
        date: "20 de Fevereiro, 2024",
        category: "Eventos",
        readTime: "3 min"
      }
    ];

    setPosts(blogPosts);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      "Receitas": "danger",
      "Novidades": "primary",
      "Curiosidades": "warning",
      "Dicas": "success",
      "Empresa": "info",
      "Eventos": "secondary"
    };
    return colors[category] || "secondary";
  };

  return (
    <Layout>
      <section className="blog-section">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h1 className="blog-title">Blog</h1>
              <p className="blog-subtitle">
                Fique por dentro das novidades, receitas e curiosidades do mundo dos hambúrgueres
              </p>
            </Col>
          </Row>

          <Row>
            {posts.map((post) => (
              <Col key={post.id} lg={4} md={6} className="mb-4">
                <Card className="blog-card h-100">
                  <div className="blog-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={post.image}
                      alt={post.title}
                      className="blog-image"
                    />
                    <Badge 
                      bg={getCategoryColor(post.category)} 
                      className="category-badge-blog"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <div className="blog-meta mb-2">
                      <span className="blog-author">
                        <i className="bi bi-person-fill me-1"></i>
                        {post.author}
                      </span>
                      <span className="blog-date">
                        <i className="bi bi-calendar-fill me-1"></i>
                        {post.date}
                      </span>
                    </div>
                    <Card.Title className="blog-post-title">{post.title}</Card.Title>
                    <Card.Text className="blog-excerpt flex-grow-1">
                      {post.excerpt}
                    </Card.Text>
                    <div className="blog-footer">
                      <span className="read-time">
                        <i className="bi bi-clock me-1"></i>
                        {post.readTime}
                      </span>
                      <Button variant="outline-danger" size="sm" className="read-more-btn">
                        Ler mais
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-5">
            <Col lg={12} className="text-center">
              <div className="newsletter-box">
                <h4>Assine nossa Newsletter</h4>
                <p>Receba nossas novidades e promoções exclusivas diretamente no seu e-mail</p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu e-mail"
                  />
                  <Button variant="danger" className="subscribe-btn">
                    Inscrever-se
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
