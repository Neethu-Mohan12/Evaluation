import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetails({ addToCart }) {
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const { id } = useParams();

    useEffect(() => {      
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
              
            })
            .catch(err => {
                console.error("Error fetching product:", err);
              
            });
    }, [id]);

    const calculateDiscountedPrice = () => {
        if (!product) return null;
        const discountedPrice = product.price - (product.price * product.discountPercentage) / 100;
        return discountedPrice.toFixed(2);
    };

    

    if (!product) {
        return <div>No product found</div>;
    }

    const discountPercentage = product.discountPercentage || 0;

    return (
        <div className="flex justify-center items-center ms-20 p-5 mt-10">
            <div className="relative mb-2">
                {product.images?.map((image, index) => (
                    <img
                        className="mb-2 w-60 h-20 cursor-pointer"
                        key={index}
                        src={image}
                        alt="product image"
                        onClick={() => setSelectedImage(index)}
                    />
                ))}
            </div>
            <div className="ms-5 w-full">
                <img src={product?.images[selectedImage]} alt="Selected image" className="w-80 h-80" />
            </div>
            <div className="desc text-center me-80">
                <h1 className="text-lg text-bold"><b>{product.brand}</b> <br /><b>{product.category}</b></h1>
            <br />    <p className="text-lg text-bold">Description:{product.description} <br />Rs.{product.price}</p>
                <p className="text-lg text-bold">Discount: {discountPercentage}%</p>
                {product && product.discountPercentage > 0 && (
                    <p className="text-lg text-bold">Discounted Price: Rs.{calculateDiscountedPrice()}</p>
                )}
              
            </div>
        </div>
    );
}

export default ProductDetails;
