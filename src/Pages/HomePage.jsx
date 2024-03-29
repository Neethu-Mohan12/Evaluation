import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/products/ProductCard';
import Header from '../components/Header/Header';

function ProductPage() {
    const [products, setProducts] = useState([]);
  
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setProducts(res.data.products);
               
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                
            });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='bg-blue-200 relative top-20'>
            <Header />
            <div className="my-4 ms-4 pt-5">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-300 p-2 rounded-md"
                />
            </div>
           
                <div className="grid  xl:grid-cols-4 gap-4 mx-3">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
           
        </div>
    );
}

export default ProductPage;
