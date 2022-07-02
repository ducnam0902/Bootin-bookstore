import { brand1 } from "@bootin/assets/image";
import { Link } from "react-router-dom";
import { Col, Container } from "reactstrap";
const FeatureAuthor = () => {
  return (
    <div className="featureAuthorContainer">
      <h4 className="featureAuthorText">Featured Author</h4>
      <Container fluid="true" className="featureAuthorList">
        <Col lg={3} md={6} sm={12} className="featureAuthorItem">
          <div className="imageSection">
            <Link to="/" className="featureAuthorImage">
              <img src={brand1} alt="Anna Hillton" className="authorImage" />
              <div className="featureAuthorBranch"></div>
              <p className="featureAuthorTopRate">#6</p>
            </Link>
          </div>

          <div className="featureAuthorTitle">
            <Link to="/" className="authorName">
              Anna Hillton
            </Link>
            <p className="publishedBook">3 Published Book</p>
          </div>
        </Col>

        <Col lg={3} md={6} sm={12} className="featureAuthorItem">
          <div className="imageSection">
            <Link to="/" className="featureAuthorImage">
              <img src={brand1} alt="Anna Hillton" className="authorImage" />
              <div className="featureAuthorBranch"></div>
              <p className="featureAuthorTopRate">#6</p>
            </Link>
          </div>

          <div className="featureAuthorTitle">
            <Link to="/" className="authorName">
              Anna Hillton
            </Link>
            <p className="publishedBook">3 Published Book</p>
          </div>
        </Col>

        <Col lg={3} md={6} sm={12} className="featureAuthorItem">
          <div className="imageSection">
            <Link to="/" className="featureAuthorImage">
              <img src={brand1} alt="Anna Hillton" className="authorImage" />
              <div className="featureAuthorBranch"></div>
              <p className="featureAuthorTopRate">#6</p>
            </Link>
          </div>

          <div className="featureAuthorTitle">
            <Link to="/" className="authorName">
              Anna Hillton
            </Link>
            <p className="publishedBook">3 Published Book</p>
          </div>
        </Col>

        <Col lg={3} md={6} sm={12} className="featureAuthorItem">
          <div className="imageSection">
            <Link to="/" className="featureAuthorImage">
              <img src={brand1} alt="Anna Hillton" className="authorImage" />
              <div className="featureAuthorBranch"></div>
              <p className="featureAuthorTopRate">#6</p>
            </Link>
          </div>

          <div className="featureAuthorTitle">
            <Link to="/" className="authorName">
              Anna Hillton
            </Link>
            <p className="publishedBook">3 Published Book</p>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default FeatureAuthor;
