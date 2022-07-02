import { brand1, brand2, brand3, brand4 } from "@bootin/assets/image";
import { Col, Container, Row } from "reactstrap";
import FeatureAuthorItem from "../FeatureAuthorItem";
const FeatureAuthor = () => {
  const data = [
    {
      image: brand1,
      topRated: 6,
      authorName: "Anna Hillton",
      publishedBook: 3,
    },
    {
      image: brand2,
      topRated: 2,
      authorName: "Susan Merrlin",
      publishedBook: 4,
    },
    {
      image: brand3,
      topRated: 12,
      authorName: "Coco Simon",
      publishedBook: 2,
    },
    {
      image: brand4,
      topRated: 5,
      authorName: "Sabela Hupter",
      publishedBook: 7,
    },
  ];
  return (
    <Container className="featureAuthorContainer">
      <h4 className="featureAuthorText">Featured Author</h4>
      <div className="featureAuthorList">
        <Row>
          {data.map((item, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <FeatureAuthorItem {...item} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="featureAuthorLine"></div>
    </Container>
  );
};

export default FeatureAuthor;
