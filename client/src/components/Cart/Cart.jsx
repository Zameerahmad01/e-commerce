import "./Cart.scss";
import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";

import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/Context";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  return (
    <div className="cart_panel">
      <div className="opac_layer"></div>
      <div className="cart_content">
        <div className="cart_header">
          <span className="heading">shopping Cart</span>
          <span
            onClick={() => {
              setShowCart(false);
            }}
            className="close_btn"
          >
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty_cart">
            <BsCartX />
            <span>Your Cart is Empty</span>
            <button className="return_cta">Return to Shop</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart_footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#x20A8;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="check_cta">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
