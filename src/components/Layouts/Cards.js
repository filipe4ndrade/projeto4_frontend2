import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards({ image, rating, title, paragraph, price, renderRatingIcons }) {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      {/* Adicionei h-100 para o Card ocupar toda a altura da Col */}
      <Card className="overflow-hidden h-100">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        
        {/* Transformei o Body em um container Flex e coluna */}
        <Card.Body className="d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          
          {/* O segredo está aqui: flex-grow-1 faz este campo ocupar todo o espaço sobrando */}
          <Card.Text className="flex-grow-1">
            {paragraph}
          </Card.Text>

          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="menu_price">
              <h5 className="mb-0">R${Number(price).toFixed(2).replace('.', ',')}</h5>
            </div>
            <div className="add_to_card">
              <Link to="/">
                <i className="bi bi-bag me-2"></i>
                Adicionar
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;