import PropTypes from "prop-types";

const FooterTitle = ({ title }) => {
  return (
    <div className="footerTitle">
      <h4 className="titleHeader">{title}</h4>
      <div className="footerLine"></div>
    </div>
  );
};

FooterTitle.propTypes = {
  title: PropTypes.string,
};

export default FooterTitle;
