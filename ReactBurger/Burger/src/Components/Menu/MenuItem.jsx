import { Card,  } from "react-bootstrap";

const MenuItem = ({name,image,content,price}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <h5>{price} TL</h5>
          <button className="btn btn-outline-warning">Add to Cart</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
