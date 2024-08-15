import Product from "./Product/Product";
import "./Products.scss";
const Products = ({products,innerPage,  headingText}) => {
    return (
    <div className="products_container">
        {!innerPage && <h2 className="products_heading">{headingText}</h2>}
        <div className="products">
            {products?.data?.map((item)=>(
                <Product key={item.id} id={item.id} data={item.attributes} />
            ))}
        </div>
    </div>
);
};

export default Products;
