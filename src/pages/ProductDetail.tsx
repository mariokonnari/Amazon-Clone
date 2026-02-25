import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { useState, useEffect } from "react";
import type { Product } from "../types/product"

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {setProduct(data)})
    }, [id])

    if (!product) {
        return(
            <div className="max-w-4xl mx-auto px-8 py-12">
                <h2 className="text-2xl font-semibold text-red-500">Product not found</h2>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return(
        <div className="max-w-4xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-96 flex-shrink-0">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-contain rounded-lg"
                />
            </div>
            
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">
                    {product.title}
                </h1>

                <p className="text-2xl font-semibold text-gray-900">
                    ${product.price}
                </p>

                <div className="text-yellow-500 text-lg">
                    ⭐ {product.rating.rate}
                </div>

                <button 
                    className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold transition duration-200"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;