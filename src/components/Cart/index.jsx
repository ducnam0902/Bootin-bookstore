import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { Collapse } from "reactstrap";

import "./styles.scss";
const Cart = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const handleToggleCart = () => {
    setToggleCart((toggleCart) => !toggleCart);
  };
  return (
    <div className="headerCart">
      <BsBag className="cartIcon" onClick={handleToggleCart} />
      <div className="cartQuantity">0</div>
      <Collapse isOpen={toggleCart}>
        <div className="cartContainer">
          {cartItem.length === 0 ? (
            <div className="noProduct">No products in the cart.</div>
          ) : (
            <div>a</div>
          )}
        </div>
      </Collapse>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
