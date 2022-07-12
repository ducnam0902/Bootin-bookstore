import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { Button, ButtonGroup, Collapse } from "reactstrap";
import CartItem from "../CartItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInCart } from "@bootin/store/cart-slide";

const Cart = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const cartItem = useSelector((state) => state.cart.cartSelected);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  const handleToggleCart = () => {
    setToggleCart((toggleCart) => !toggleCart);
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItemInCart(id));
  };
  return (
    <div className="headerCart">
      <BsBag className="cartIcon" onClick={handleToggleCart} />
      <div className="cartQuantity">{cartItem.length}</div>
      <Collapse isOpen={toggleCart}>
        <div className="cartContainer">
          {cartItem.length === 0 ? (
            <div className="noProduct">No products in the cart.</div>
          ) : (
            <>
              <div className="cartItemContainer">
                {cartItem.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    bookTitle={item.bookTitle}
                    image={item.image}
                    quantity={item.quantity}
                    price={item.price}
                    onDelete={handleDeleteItem}
                  />
                ))}
              </div>
              <div className="totalSection">
                <p className="totalText">Total: </p>
                <span className="lineSection"></span>
                <p className="totalPrice">${totalPrice}</p>
              </div>
              <ButtonGroup className="buttonGroupCart">
                <Button className="viewCartbutton">View cart</Button>
                <Button className="checkoutButton">Check out </Button>
              </ButtonGroup>
            </>
          )}
        </div>
      </Collapse>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
