import { Button, Col, Container, Row } from "reactstrap";

const WonderfulGift = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="wonderfullGiftContainer">
          <h4 className="wonderfulGiftText">Wonderful Gift</h4>
          <p className="wondefulGiftDescription">
            Give Your Family And Friend A Books
          </p>
          <Button className="wonderfulGiftButton">Shop Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WonderfulGift;
