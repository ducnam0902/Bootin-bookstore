import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { BsTrash } from "react-icons/bs";

const Cartitem = ({ bookTitle, quantity, image, price, onDelete, id }) => {
  const handleDeleteItem = () => {
    onDelete(id);
  };

  return (
    <div className="cartItem">
      <Link to="/">
        <img src={image} alt={bookTitle} className="cartItemImage" />
      </Link>
      <div className="cartItemInfo">
        <Link to="/" className="cartItemTitle">
          {bookTitle}
        </Link>
        <div className="cartItemTotalItem">
          <span className="cartItemQuantity">{quantity}</span>
          <span className="cartItemDouble"> x </span>
          <span className="cartItemPrice">${price}</span>
        </div>
        <div className="cartItemDeleteContainer" onClick={handleDeleteItem}>
          <BsTrash className="cartItemDelete" />
        </div>
      </div>
    </div>
  );
};

Cartitem.propTypes = {
  bookTitle: PropTypes.string,
  quantity: PropTypes.number,
  image: PropTypes.string,
  price: PropTypes.number,
  onDelete: PropTypes.func,
  id: PropTypes.number,
};

export default Cartitem;
