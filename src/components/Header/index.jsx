import { Container, Row, Col } from "reactstrap";
import { logo } from "../../assets/image";
import { Link, NavLink } from "react-router-dom";
import { BsSearch, BsHeart } from "react-icons/bs";
import Cart from "../Cart";
import HeaderUser from "../HeaderUser";
import HeaderNavigation from "../HeaderNavigation";
const Header = () => {
  return (
    <Container className="headerContainer">
      <Row className="headerRow">
        <Col className="headerLogo" lg={2} md={12} sm={12} xs={12}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </Col>
        <Col lg={8} md={6} sm={6} xs={6} className="headerNav">
          <HeaderNavigation />
        </Col>

        <Col lg={2} md={6} sm={6} xs={6} className="headerFeature">
          <div className="headerSearch">
            <Link to="/" className="searchIconLink">
              <BsSearch className="searchIcon" />
            </Link>
          </div>
          <div className="headerFavourite">
            <Link to="/" className="favouriteIconLink">
              <BsHeart className="favourtieIcon" />
            </Link>
            <div className="favouriteQuantity">0</div>
          </div>
          <Cart />
          <HeaderUser />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
