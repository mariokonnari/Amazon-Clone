import { Link } from "react-router-dom";

interface ProductCardProps {
    id: number
    title: string
    price: number
    image: string
    rating: number
}

const ProductCard = ({ id, title, price, image, rating }: ProductCardProps) => {
    return(
        <Link to={`/product/${id}`} className="text-inherit no-underline">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">

                {/* Product Image */}
                <div className="w-full h-48 flex items-center justify-center mb-4">
                    <img
                        src={image}
                        alt={title}
                        className="max-h-full object-contain" 
                    />
                </div>

                {/* Product Info */}
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                    {title}
                </h2>

                <p className="text-xl font-bold text-gray-900 mb-2">
                    ${price.toFixed(2)}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                    {Array.from({length:5}).map((_,index) => (
                        <span key={index}>
                            {index < rating ? "⭐" : "☆"}
                        </span>
                    ))}
                </div>

                {/* Add to Cart Button */}
                <button className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition">
                    Add to Cart
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;