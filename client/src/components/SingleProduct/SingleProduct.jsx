import "./SingleProduct.scss";

import { useState, useContext } from "react";
import prod from "../../assets/products/earbuds-prod-1.webp";
import { FaCartPlus } from "react-icons/fa";
import RelatedProducts from './RelatedProducts/RelatedProducts'

import useFetch from '../../hooks/useFetch'
import { useParams } from "react-router-dom";
import { Context } from "../../utils/Context";


const SingleProduct = () => {

  const [quantity, setQuantity] = useState(1)
  const {id}  = useParams()
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
  const {handleAddToCart} = useContext(Context)
   
  if (!data) return ;
  const product = data.data[0].attributes

  const increment = ()=>{
    setQuantity((prevState) => prevState + 1)
  }
  const decrement = ()=>{
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1) 
    }
  }
    
  return (
    <div className="single_product_main">
      <div className="layout">
        <div className="single_product_page">
          <div className="left">
            <img src={process.env.REACT_APP_STRIPE_DEV_URL + product.img.data[0].attributes.url} alt="" />
          </div>
          <div className="right">
            <div className="name">{product.title}</div>
            <span className="price">&#x20A8; {product.price}</span>
            <p className="description">{product.desc}</p>

            <div className="cart_buttons">
              <div className="quantity_buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>

              <button className="add_to_cart-button" onClick={()=>{
                handleAddToCart(data.data[0], quantity)
                setQuantity(1)
              }}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <div className="divider"></div>

            <div className="info_item">
              <span className="text_bold">
                Category:{" "}
                <span className="text">{product.categories.data[0].attributes.title}</span>
              </span>
            </div>
          </div>
        </div>

        <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
      </div>
    </div>
  );
};

export default SingleProduct;
