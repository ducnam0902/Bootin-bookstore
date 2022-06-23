import { Col, Container, Row } from "reactstrap";
import { discontFree, fastDelivery, freeship } from "@bootin/assets/image";
import { Link } from "react-router-dom";
const Policy = () => {
  return (
    <Container>
      <Row className="rowContainer">
        <Col sm={12} md={4}>
          <div className="flexItem">
            <div className="policyIcon">
              <img src={freeship} />
            </div>
            <div className="policyContent">
              <Link to="/" className="policyTitle">
                Free Shipping
              </Link>
              <p className="policyDescription">
                Select bettwen awide range of texbook and media.
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="flexItem">
            <div className="policyIcon">
              <img src={fastDelivery} />
            </div>
            <div className="policyContent">
              <Link to="/" className="policyTitle">
                Fast Delivery
              </Link>
              <p className="policyDescription">
                Enjoy free shipping and our fast delivery service.
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="flexItem">
            <div className="policyIcon">
              <img src={discontFree} />
            </div>
            <div className="policyContent">
              <Link to="/" className="policyTitle">
                Discounted Free
              </Link>
              <p className="policyDescription">
                Get nice discount on our top rated product every sunday.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Policy;
