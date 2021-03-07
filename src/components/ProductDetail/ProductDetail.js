import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const{prdKey} = useParams();
    const product = fakeData.find(pd=> pd.key === prdKey);
    console.log(product);
    return (
        <div>
            <h1>{prdKey} coming soooooon</h1>
            <Product showAddButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;