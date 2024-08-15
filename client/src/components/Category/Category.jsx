import {useParams} from 'react-router-dom'

import Products from "../Products/Products";
import "./Category.scss";
import useFetch from '../../hooks/useFetch';
const Category = () => {
    	const {id} = useParams();

        const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
    
    return (
        <section className="category_section">
            <div className="layout">
                <h1 className="category_title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</h1>

                <Products innerPage={true} products={data} />
            </div>
        </section>
    );
};

export default Category;
