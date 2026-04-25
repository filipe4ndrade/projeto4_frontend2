import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Frango crocante, molho chili, tomates, picles e coleslaw artesanal.",
    rating: 5,
    price: 34.90,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "Blend da casa, queijo cheddar, bacon crocante, cebola e mostarda.",
    rating: 4.5,
    price: 38.50,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "Queijo prato, relish de tomate, abacate fresh, alface e cebola roxa.",
    rating: 4.5,
    price: 42.00,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "Hambúrguer de grão-de-bico, queijo vegano, alface, tomate e maionese de ervas.",
    rating: 4,
    price: 36.90,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "Dois blends de 160g, dobro de cheddar, picles e molho especial.",
    rating: 5,
    price: 45.90,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Hambúrguer de peru suculento, cheddar, cebola caramelizada e alface.",
    rating: 4,
    price: 32.00,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "Blend defumado, queijo provolone, cebola crispy e molho barbecue.",
    rating: 4.5,
    price: 39.90,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "O clássico: carne, queijo, ketchup, mostarda, picles e cebola branca.",
    rating: 4,
    price: 28.50,
  },
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
          <h2>NOSSOS BURGERS INSANOS</h2>
          <p className="para">
            Explodimos o limite do sabor com combinações ousadas e ingredientes 
            fora do comum. Prepare-se para uma experiência gastronômica intensa 
            em cada mordida.
          </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GANHE GRÁTIS</h4>
              <h5>BATATA c/ QUEIJO</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Resgatar Agora
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">PROMOÇÃO</h4>
              <h5>BURGER EM DOBRO</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Aproveitar Oferta
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
