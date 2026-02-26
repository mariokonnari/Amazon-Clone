import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import type { Product } from "../types/product";
import { useState } from "react";

const ProductCard = ({ id, title, price, image, rating }: Product) => {
    const [added, setAdded] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(addToCart({ id, title, price, description: "", category: "", image, rating }));
        setAdded(true);
        setTimeout(() => setAdded(false), 1000);
    };

    return(
        <Link to={`/product/${id}`} className="text-inherit no-underline h-full">
            <div className="h-full bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">

                {/* Product Image */}
                <div className="w-full h-40 bg-white flex items-center justify-center mb-4">
                    <img
                        src={image}
                        alt={title}
                        className="max-h-full object-contain" 
                    />
                </div>

                {/* Product Info */}
                <h2 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">
                    {title}
                </h2>

                <p className="text-xl font-bold text-gray-900 mb-2">
                    ${price.toFixed(2)}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                    {Array.from({length:5}).map((_,index) => (
                        <span key={index}>
                            {index < rating.rate ? "⭐" : "☆"}
                        </span>
                    ))}
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className={`mt-auto font-semibold py-2 rounded-md transition ${
                        added
                        ? "bg-green-500 text-white"
                        : "bg-yellow-400 hover:bg-yellow-500 text-black"
                    }`}
                >
                    {added ? "Added ✓" : "Add to Cart"}
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;