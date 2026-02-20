import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Navbar = () => {
    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    );

    const itemCount = cartItems.length;

    return(
        <nav className="flex w-full items-center justify-between bg-gray-900 text-white px-4 py-2">
            {/*Left Side - Logo*/}
            <div>
                <h2 className="text-xl font-bold cursor-pointer">Mariozon</h2>
            </div>
            {/*Middle - Search Bar*/}
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="px-3 py-2 w-64 rounded-md text-black bg-white outline-none"
                />
                <button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition">Search</button>
            </div>
            {/*Right Side - Sign In & Cart*/}
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">Sign In</button>
                <Link to="/cart" className="relative flex items-center gap-1 hover:text-yellow-400 transition">
                    🛒
                    {itemCount > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {itemCount}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;