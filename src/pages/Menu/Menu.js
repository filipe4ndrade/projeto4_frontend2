import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/MenuStyle.css";

const Menu = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulando dados de hambúrgueres
    const burgersData = [
      {
        id: 1,
        name: "Classic Burger",
        description: "Hambúrguer clássico com carne 180g, queijo cheddar, alface, tomate e molho especial",
        price: "R$ 25,90",
        image: require("../../assets/menu/burger-11.jpg"),
        category: "Clássicos"
      },
      {
        id: 2,
        name: "Bacon Burger",
        description: "Suculento hambúrguer com bacon crocante, queijo, cebola caramelizada e molho barbecue",
        price: "R$ 29,90",
        image: require("../../assets/menu/burger-12.jpg"),
        category: "Especiais"
      },
      {
        id: 3,
        name: "Double Cheese",
        description: "Dois hambúrgueres de 180g, queijo cheddar duplo, picles e molho especial",
        price: "R$ 32,90",
        image: require("../../assets/menu/burger-13.jpg"),
        category: "Especiais"
      },
      {
        id: 4,
        name: "Vegetariano",
        description: "Hambúrguer de grão-de-bico, queijo, alface, tomate, cenoura ralada e maionese verde",
        price: "R$ 24,90",
        image: require("../../assets/menu/burger-14.jpg"),
        category: "Vegetarianos"
      },
      {
        id: 5,
        name: "Chicken Burger",
        description: "Filé de frango grelhado, queijo, alface, tomate e maionese de ervas",
        price: "R$ 26,90",
        image: require("../../assets/menu/burger-15.jpg"),
        category: "Frangos"
      },
      {
        id: 6,
        name: "Premium Angus",
        description: "Carne Angus 200g, queijo suíço, rúcula, tomate seco e molho de mostarda dijon",
        price: "R$ 38,90",
        image: require("../../assets/menu/burger-16.jpg"),
        category: "Premium"
      },
      {
        id: 7,
        name: "Spicy Burger",
        description: "Hambúrguer picante com pimenta jalapeño, queijo pepper jack e molho chipotle",
        price: "R$ 30,90",
        image: require("../../assets/menu/burger-17.jpg"),
        category: "Especiais"
      },
      {
        id: 8,
        name: "BBQ Burger",
        description: "Carne 180g, queijo cheddar, onion rings crocantes e generoso molho barbecue",
        price: "R$ 31,90",
        image: require("../../assets/menu/burger-18.jpg"),
        category: "Especiais"
      }
    ];

    setBurgers(burgersData);
  }, []);

  const handleAddToCart = (burger) => {
    console.log(`Adicionando ${burger.name} ao carrinho`);
    // Lógica para adicionar ao carrinho será implementada posteriormente
  };

  return (
    <Layout>
      <section className="menu-section">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h1 className="menu-title">Nosso Menu</h1>
              <p className="menu-subtitle">
                Descubra nossos deliciosos hambúrgueres artesanais, 
                preparados com ingredientes frescos e de alta qualidade
              </p>
            </Col>
          </Row>

          <Row>
            {burgers.map((burger) => (
              <Col key={burger.id} lg={3} md={4} sm={6} className="mb-4">
                <Card className="burger-card h-100">
                  <div className="burger-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={burger.image}
                      alt={burger.name}
                      className="burger-image"
                    />
                    <div className="category-badge">{burger.category}</div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="burger-name">{burger.name}</Card.Title>
                    <Card.Text className="burger-description flex-grow-1">
                      {burger.description}
                    </Card.Text>
                    <div className="burger-footer">
                      <div className="burger-price">{burger.price}</div>
                      <Button
                        variant="danger"
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(burger)}
                      >
                        <i className="bi bi-cart-plus me-2"></i>
                        Adicionar
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-5">
            <Col lg={12} className="text-center">
              <div className="menu-info-box">
                <h4>Combos Especiais</h4>
                <p>
                  Todos os hambúrgueres podem ser pedidos em combo com batatas fritas 
                  e refrigerante por apenas +R$ 12,00
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Menu;
