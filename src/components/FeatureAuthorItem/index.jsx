import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeatureAuthorItem = ({ image, topRated, authorName, publishedBook }) => {
  return (
    <div className="featureAuthorItem">
      <div className="imageSection">
        <Link to="/" className="featureAuthorImage">
          <img src={image} alt="Anna Hillton" className="authorImage" />
          <div className="featureAuthorBranch"></div>
          <p className="featureAuthorTopRate">#{topRated}</p>
        </Link>
      </div>

      <div className="featureAuthorTitle">
        <Link to="/" className="authorName">
          {authorName}
        </Link>
        <p className="publishedBook">{publishedBook} Published Book</p>
      </div>
    </div>
  );
};

FeatureAuthorItem.propTypes = {
  image: PropTypes.string,
  topRated: PropTypes.number,
  authorName: PropTypes.string,
  publishedBook: PropTypes.number,
};

export default FeatureAuthorItem;
