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
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { BsSearch, BsHeart } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { getPopularBookList } from "@bootin/store/popularBook-slide";
import { addToCart } from "@bootin/store/cart-slide";
const PopularBook = () => {
  const popularBookList = useSelector((state) => state.popularBook.popularBookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularBookList());
  }, []);

  const getFavouriteStar = (favouriteStar) => {
    let favouriteStarList = [];
    while (favouriteStarList.length < favouriteStar) {
      favouriteStarList.push(true);
    }
    while (favouriteStarList.length < 5) {
      favouriteStarList.push(false);
    }
    return favouriteStarList;
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Container fluid className="popularBookSection">
      <h4 className="popularBookTitle">Popular Book</h4>
      <Row>
        <CardGroup className="popularBookList">
          {popularBookList?.map((item, index) => {
            const favouriteList = getFavouriteStar(item.favouriteStar);
            return (
              <Col xl={4} lg={6} sm={12} key={index}>
                <Card className="popularBookItem">
                  <Link to="/" className="popularBookImage">
                    <CardImg
                      alt="Card image cap"
                      src={item.image}
                      top
                      width="100%"
                    />
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
                      <CardTitle className="bookTitle">{item.bookTitle}</CardTitle>
                    </Link>
                    <CardSubtitle className="by">
                      by
                      <Link to="/" className="authorBook">
                        {item.author}
                      </Link>
                    </CardSubtitle>
                    <CardText className="bookFavourite">
                      {favouriteList.map((item, index) => (
                        <FaRegStar
                          key={index}
                          className={cn({
                            bookFavouriteHighlight: item,
                          })}
                        />
                      ))}
                    </CardText>
                    <CardText className="bookPrice">${item.price}</CardText>
                    <Button
                      className="addToCart"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add To Cart
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </CardGroup>
      </Row>
    </Container>
  );
};

export default PopularBook;
