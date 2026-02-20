import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
    const { id } = useParams();

    const product = products.find(
        (p) => p.id === Number(id)
    );

    if (!product) {
        return(
            <div className="max-w-4xl mx-auto px-8 py-12">
                <h2 className="text-2xl font-semibold text-red-500">Product not found</h2>
            </div>
        );
    }

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
                    ⭐ {product.rating}
                </div>

                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;