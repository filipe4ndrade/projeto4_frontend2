import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col, Card, Button, Badge, Form } from "react-bootstrap";
import "../../styles/ShopStyle.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulando dados de produtos
    const productsData = [
      {
        id: 1,
        name: "Combo Família",
        description: "4 hambúrgueres, 2 batatas grandes, 4 refrigerantes",
        price: "R$ 119,90",
        image: require("../../assets/menu/ads-1.jpg"),
        category: "combos",
        badge: "Mais Vendido"
      },
      {
        id: 2,
        name: "Combo Casal",
        description: "2 hambúrgueres, 1 batata grande, 2 refrigerantes",
        price: "R$ 64,90",
        image: require("../../assets/menu/ads-2.jpg"),
        category: "combos",
        badge: null
      },
      {
        id: 3,
        name: "Batata Frita Grande",
        description: "Porção grande de batatas fritas crocantes",
        price: "R$ 15,90",
        image: require("../../assets/about/pizza.png"),
        category: "acompanhamentos",
        badge: null
      },
      {
        id: 4,
        name: "Onion Rings",
        description: "Deliciosos anéis de cebola empanados",
        price: "R$ 18,90",
        image: require("../../assets/about/salad.png"),
        category: "acompanhamentos",
        badge: null
      },
      {
        id: 5,
        name: "Refrigerante 350ml",
        description: "Lata de refrigerante geladinho",
        price: "R$ 5,00",
        image: require("../../assets/menu/burger-11.jpg"),
        category: "bebidas",
        badge: null
      },
      {
        id: 6,
        name: "Suco Natural 500ml",
        description: "Suco natural de frutas frescas",
        price: "R$ 8,90",
        image: require("../../assets/menu/burger-12.jpg"),
        category: "bebidas",
        badge: null
      },
      {
        id: 7,
        name: "Milkshake Chocolate",
        description: "Cremoso milkshake de chocolate",
        price: "R$ 16,90",
        image: require("../../assets/menu/burger-13.jpg"),
        category: "bebidas",
        badge: "Novo"
      },
      {
        id: 8,
        name: "Brownie",
        description: "Brownie de chocolate com sorvete",
        price: "R$ 14,90",
        image: require("../../assets/menu/burger-14.jpg"),
        category: "sobremesas",
        badge: null
      },
      {
        id: 9,
        name: "Camiseta Oficial",
        description: "Camiseta 100% algodão com logo da hamburgueria",
        price: "R$ 59,90",
        image: require("../../assets/shop/e-shop.png"),
        category: "merchandise",
        badge: null
      }
    ];

    setProducts(productsData);
  }, []);

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <Layout>
      <section className="shop-section">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h1 className="shop-title">Loja</h1>
              <p className="shop-subtitle">
                Explore nossos combos, acompanhamentos, bebidas e produtos exclusivos
              </p>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col lg={12}>
              <div className="filter-buttons text-center">
                <Button
                  variant={filter === "all" ? "danger" : "outline-danger"}
                  className="filter-btn me-2 mb-2"
                  onClick={() => setFilter("all")}
                >
                  Todos
                </Button>
                <Button
                  variant={filter === "combos" ? "danger" : "outline-danger"}
                  className="filter-btn me-2 mb-2"
                  onClick={() => setFilter("combos")}
                >
                  Combos
                </Button>
                <Button
                  variant={filter === "acompanhamentos" ? "danger" : "outline-danger"}
                  className="filter-btn me-2 mb-2"
                  onClick={() => setFilter("acompanhamentos")}
                >
                  Acompanhamentos
                </Button>
                <Button
                  variant={filter === "bebidas" ? "danger" : "outline-danger"}
                  className="filter-btn me-2 mb-2"
                  onClick={() => setFilter("bebidas")}
                >
                  Bebidas
                </Button>
                <Button
                  variant={filter === "sobremesas" ? "danger" : "outline-danger"}
                  className="filter-btn me-2 mb-2"
                  onClick={() => setFilter("sobremesas")}
                >
                  Sobremesas
                </Button>
                <Button
                  variant={filter === "merchandise" ? "danger" : "outline-danger"}
                  className="filter-btn mb-2"
                  onClick={() => setFilter("merchandise")}
                >
                  Merchandise
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} lg={4} md={6} className="mb-4">
                <Card className="product-card h-100">
                  <div className="product-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    {product.badge && (
                      <Badge bg="warning" className="product-badge">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-name">{product.name}</Card.Title>
                    <Card.Text className="product-description flex-grow-1">
                      {product.description}
                    </Card.Text>
                    <div className="product-footer">
                      <div className="product-price">{product.price}</div>
                      <Button variant="danger" className="buy-btn">
                        <i className="bi bi-bag-plus me-2"></i>
                        Comprar
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredProducts.length === 0 && (
            <Row>
              <Col lg={12} className="text-center">
                <p className="no-products">Nenhum produto encontrado nesta categoria.</p>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Shop;
