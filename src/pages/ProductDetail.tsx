import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { useState, useEffect } from "react";
import type { Product } from "../types/product"
import { Link } from "react-router-dom";

const ProductDetail = () => {
    const [added, setAdded] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<Product | null>(null)



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => { setProduct(data) })
    }, [id])

    if (!product) {
        return (
            <div className="max-w-4xl mx-auto px-8 py-12">
                <h2 className="text-2xl font-semibold text-red-500">Product not found</h2>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setAdded(true);
        setTimeout(() => setAdded(false), 1000);
    };

    return (
        <div className="min-h-screen max-w-4xl mx-auto px-4 py-8">
            <Link
                to="/"
                className="text-blue-600 hover:underline mb-6 inline-block"
            >
                ← Back to Products
            </Link>

            <div className="flex flex-col md:flex-row gap-12">
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

                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded capitalize">
                        {product.category}
                    </span>

                    <p className="text-2xl font-semibold text-gray-900">
                        ${product.price.toFixed(2)}
                    </p>

                    <div className="text-yellow-500 text-lg">
                        ⭐ {product.rating.rate}
                    </div>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        {product.description}
                    </p>
                    <button
                        onClick={handleAddToCart}
                        className={`mt-auto font-semibold py-2 rounded-md transition ${added
                                ? "bg-green-500 text-white"
                                : "bg-yellow-400 hover:bg-yellow-500 text-black"
                            }`}
                    >
                        {added ? "Added ✓" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;