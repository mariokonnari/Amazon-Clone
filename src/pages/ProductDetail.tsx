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
    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [quantity, setQuantity] = useState(1);



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => { 
                setProduct(data) 
                setQuantity(1);
            })
    }, [id])

    useEffect(() => {
        if (!product?.category) return;

        fetch(`https://fakestoreapi.com/products/category/${product.category}`)
            .then(res => res.json())
            .then((data: Product[]) => {
                const filtered = data.filter(p => p.id !== product.id);
                setRelatedProducts(filtered);
            });
    },[product?.category]);

    if (!product) {
        return (
            <div className="max-w-4xl mx-auto px-8 py-12">
                <h2 className="text-2xl font-semibold text-red-500">Product not found</h2>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addToCart({...product, quantity}));
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
                    {/*Quantity Selector*/}
                    <div className="flex items-center gap-4 mt-4">
                        <button
                            onClick={() => setQuantity(prev => Math.max(1, prev -1))}
                            className="w-12 h-12 text-xl font-bold border rounded-lg hover:bg-gray-100 transition"
                        >
                            −
                        </button>
                        <span className="text-xl font-semibold w-10 text-center">
                            {quantity}
                        </span>
                        <button
                            onClick={() => setQuantity(prev => prev + 1)}
                            className="w-12 h-12 text-xl font-bold border rounded-lg hover:bg-gray-100 transition"
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className={`mt-4 font-semibold py-2 rounded-md transition ${added
                                ? "bg-green-500 text-white"
                                : "bg-yellow-400 hover:bg-yellow-500 text-black"
                            }`}
                    >
                        {added ? "Added ✓" : "Add to Cart"}
                    </button>
                </div>
            </div>
            {/*Related Products*/}
            {relatedProducts.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Related Products</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map(item => (
                            <Link
                                key={item.id}
                                to={`/product/${item.id}`}
                                className="border rounded-lg p-4 hover:shadow-md transition"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-32 mx-auto object-contain mb-4"
                                    />
                                    <h3 className="text-sm font-medium line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 font-semibold">
                                        ${item.price.toFixed(2)}
                                    </p>
                            </Link>
                        ))}
                    </div>
                </div>    
            )}
        </div>
    );
};

export default ProductDetail;