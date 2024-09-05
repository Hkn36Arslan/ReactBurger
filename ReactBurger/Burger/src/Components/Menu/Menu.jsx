import Data from "../../Helpers/Data.js";
import MenuItem from "./MenuItem.jsx";
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap Grid bileşenleri

const Menu = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center my-5">Burgerlerimiz</h1>
      <Row>
        {Data.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
            {/* Her satırda üç kart olacak şekilde ayarlandı */}
            <MenuItem
              name={item.name}
              image={item.image}
              content={item.content}
              price={item.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
