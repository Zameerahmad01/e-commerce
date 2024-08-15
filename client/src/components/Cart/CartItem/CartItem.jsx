import "./CartItem.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp'
import {MdClose} from 'react-icons/md'
import { useContext } from "react";
import { Context } from "../../../utils/Context";

const CartItem = () => {

    const {cartItems, handleCartProductQuantity, handleRemoveFromCart} = useContext(Context)
    return (
    <div className="cart_products">
        {cartItems.map((item)=>(
             <div key={item.id} className="cart_product">
             <div className="img_container">
                 <img src={process.env.REACT_APP_STRIPE_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
             </div>
             <div className="prod_details">
                 <span className="name">{item.attributes.title}</span>
                 <MdClose className="close_btn" onClick={()=>{handleRemoveFromCart(item)}} />
                 <div className="quantity_buttons">
                     <span onClick={()=>{handleCartProductQuantity('dec', item)}}>-</span>
                     <span>{item.attributes.quantity}</span>
                     <span onClick={()=>{handleCartProductQuantity('inc', item)}}>+</span>
                 </div>
 
                 <div className="text">
                     <span>{item.attributes.quantity}</span>
                     <span>x</span>
                     <span>&#x20A8;{item.attributes.price * item.attributes.quantity}</span>
                 </div>
             </div>
         </div>
        ))}
       
    </div>
    );
};

export default CartItem;
