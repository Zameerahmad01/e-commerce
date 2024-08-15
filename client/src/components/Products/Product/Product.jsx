import "./Product.scss";
import {useNavigate} from 'react-router-dom'

const Product = ({id, data}) => {

    const navigate = useNavigate()
    return (
    <div className="product_cart" onClick={()=>navigate("/product/" + id)}>
        <div className="tumbnail">
            <img src={process.env.REACT_APP_STRIPE_DEV_URL + data.img.data[0].attributes.url} alt="" />
        </div>
        <div className="product_details">
            <h3 className="product_name">{data.title}</h3>
            <p className="product_price">&#x20A8;{data.price}</p>
        </div>
    </div>
    );
};

export default Product;
