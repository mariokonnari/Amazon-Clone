import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const ProductList = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-8 py-12">
            <h1 className="text-3xl font-bold mb-8">
                All Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;