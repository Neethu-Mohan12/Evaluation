import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(res => {
                setProducts(res.data.products);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h1 className="p-6 text-center hover:underline duration-300 cursor-pointer">
                Product
            </h1>
            <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {products.map((product, i) => {
                    return <ProductCard key={i} product={product}/>;
                })}
            </div>
        </>
    );
}

export default Products;
