import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "../../assets/images/bunnerYeni.png";
const Contact = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Sol taraf: Resim */}
        <Col md={6}>
          <img
            src={Image}
            alt="İletişim"
            className="img-fluid"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>

        {/* Sağ taraf: Form */}
        <Col md={6}>
          <h2>Bizimle İletişime Geçin</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Adı-Soyadı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adınızı ve Soyadınızı girin"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email adresinizi girin" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Mesajınız</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Mesajınızı buraya yazın"
              />
            </Form.Group>

            <Button variant="danger " type="submit" className="mt-4 w-100">
              Gönder
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
