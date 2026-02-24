import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

interface ProductListProps {
    searchQuery: string;
}

const ProductList = ({searchQuery}: ProductListProps) => {
    const filteredProducts = products.filter((product) =>
        product.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        return (
            <div className="min-h-screen bg-gray-100 px-8 py-12">
                <p className="text-xl text-gray-500 text-center mt-12">
                    No products found for {searchQuery}
                </p>
            </div> 
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 px-8 py-12">
            <h1 className="text-3xl font-bold mb-8">
                All Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
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