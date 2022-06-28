import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { cartItem1 } from "@bootin/assets/image/";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { BsSearch, BsHeart } from "react-icons/bs";
const PopularBook = () => {
  return (
    <Container fluid className="popularBookSection">
      <h4 className="popularBookTitle">Popular Book</h4>
      <Row>
        <CardGroup className="popularBookList">
          <Col xl={4} lg={6} sm={12}>
            <Card className="popularBookItem">
              <Link to="/" className="popularBookImage">
                <CardImg alt="Card image cap" src={cartItem1} top width="100%" />
                <div className="productIcon">
                  <div className="quickViewProduct">
                    <BsSearch />
                  </div>
                  <div className="favouriteProduct">
                    <BsHeart />
                  </div>
                </div>
              </Link>

              <CardBody className="popularBookDescription">
                <Link to="/">
                  <CardTitle className="bookTitle">Cup Cake Diraes</CardTitle>
                </Link>
                <CardSubtitle className="by">
                  by
                  <Link to="/" className="authorBook">
                    Anna Hillton
                  </Link>
                </CardSubtitle>
                <CardText className="bookFavourite">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </CardText>
                <CardText className="bookPrice">$20.50</CardText>
                <Button className="addToCart">Add To Cart</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={6} sm={12}>
            <Card className="popularBookItem">
              <Link to="/" className="popularBookImage">
                <CardImg alt="Card image cap" src={cartItem1} top width="100%" />
                <div className="productIcon">
                  <div className="quickViewProduct">
                    <BsSearch />
                  </div>
                  <div className="favouriteProduct">
                    <BsHeart />
                  </div>
                </div>
              </Link>

              <CardBody className="popularBookDescription">
                <Link to="/">
                  <CardTitle className="bookTitle">Cup Cake Diraes</CardTitle>
                </Link>
                <CardSubtitle className="by">
                  by
                  <Link to="/" className="authorBook">
                    Anna Hillton
                  </Link>
                </CardSubtitle>
                <CardText className="bookFavourite">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </CardText>
                <CardText className="bookPrice">$20.50</CardText>
                <Button className="addToCart">Add To Cart</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={6} sm={12}>
            <Card className="popularBookItem">
              <Link to="/" className="popularBookImage">
                <CardImg alt="Card image cap" src={cartItem1} top width="100%" />
                <div className="productIcon">
                  <div className="quickViewProduct">
                    <BsSearch />
                  </div>
                  <div className="favouriteProduct">
                    <BsHeart />
                  </div>
                </div>
              </Link>

              <CardBody className="popularBookDescription">
                <Link to="/">
                  <CardTitle className="bookTitle">Cup Cake Diraes</CardTitle>
                </Link>
                <CardSubtitle className="by">
                  by
                  <Link to="/" className="authorBook">
                    Anna Hillton
                  </Link>
                </CardSubtitle>
                <CardText className="bookFavourite">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </CardText>
                <CardText className="bookPrice">$20.50</CardText>
                <Button className="addToCart">Add To Cart</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={6} sm={12}>
            <Card className="popularBookItem">
              <Link to="/" className="popularBookImage">
                <CardImg alt="Card image cap" src={cartItem1} top width="100%" />
                <div className="productIcon">
                  <div className="quickViewProduct">
                    <BsSearch />
                  </div>
                  <div className="favouriteProduct">
                    <BsHeart />
                  </div>
                </div>
              </Link>

              <CardBody className="popularBookDescription">
                <Link to="/">
                  <CardTitle className="bookTitle">Cup Cake Diraes</CardTitle>
                </Link>
                <CardSubtitle className="by">
                  by
                  <Link to="/" className="authorBook">
                    Anna Hillton
                  </Link>
                </CardSubtitle>
                <CardText className="bookFavourite">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </CardText>
                <CardText className="bookPrice">$20.50</CardText>
                <Button className="addToCart">Add To Cart</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={6} sm={12}>
            <Card className="popularBookItem">
              <Link to="/" className="popularBookImage">
                <CardImg alt="Card image cap" src={cartItem1} top width="100%" />
                <div className="productIcon">
                  <div className="quickViewProduct">
                    <BsSearch />
                  </div>
                  <div className="favouriteProduct">
                    <BsHeart />
                  </div>
                </div>
              </Link>

              <CardBody className="popularBookDescription">
                <Link to="/">
                  <CardTitle className="bookTitle">Cup Cake Diraes</CardTitle>
                </Link>
                <CardSubtitle className="by">
                  by
                  <Link to="/" className="authorBook">
                    Anna Hillton
                  </Link>
                </CardSubtitle>
                <CardText className="bookFavourite">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </CardText>
                <CardText className="bookPrice">$20.50</CardText>
                <Button className="addToCart">Add To Cart</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={6} sm={12}>
            <Card className="popularBookItem">
              <Link to="/" className="popularBookImage">
                <CardImg alt="Card image cap" src={cartItem1} top width="100%" />
                <div className="productIcon">
                  <div className="quickViewProduct">
                    <BsSearch />
                  </div>
                  <div className="favouriteProduct">
                    <BsHeart />
                  </div>
                </div>
              </Link>

              <CardBody className="popularBookDescription">
                <Link to="/">
                  <CardTitle className="bookTitle">Cup Cake Diraes</CardTitle>
                </Link>
                <CardSubtitle className="by">
                  by
                  <Link to="/" className="authorBook">
                    Anna Hillton
                  </Link>
                </CardSubtitle>
                <CardText className="bookFavourite">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </CardText>
                <CardText className="bookPrice">$20.50</CardText>
                <Button className="addToCart">Add To Cart</Button>
              </CardBody>
            </Card>
          </Col>
        </CardGroup>
      </Row>
    </Container>
  );
};

export default PopularBook;
