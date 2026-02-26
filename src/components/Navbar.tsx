import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

interface NavbarProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({setSearchQuery}: NavbarProps) => {
    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    );

    const totalQuantity = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return(
        <div>
            <nav className="flex w-full items-center justify-between bg-gray-900 text-white px-4 py-2">
                {/*Left Side - Logo*/}
                <Link to="/">
                    <h2 className="text-xl font-bold cursor-pointer text-yellow-400">Mariozon</h2>
                </Link>
                {/*Middle - Search Bar*/}
                <div className="hidden md:flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="px-3 py-2 w-64 rounded-md text-black bg-white outline-none"
                        onChange={(e) =>setSearchQuery(e.target.value)}
                    />
                    <button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition">Search</button>
                </div>
                {/*Right Side - Sign In & Cart*/}
                <div className="flex items-center gap-4">
                    <button className="hidden md:block px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">Sign In</button>
                    <Link to="/cart" className="relative flex items-center w-10 h-10 hover:text-yellow-400 transition">
                        <span className="text-2xl">🛒</span>
                        {totalQuantity > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
            {/*Mobile*/}
            <div className="md:hidden bg-gray-900 px-4 pb-2">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="flex-1 px-3 py-2 rounded-md text-black bg-white outline-none"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition">Search</button>
                </div>
            </div>
            <div className="bg-gray-700 text-white text-sm px-4 py-1 flex gap-6">
                <span className="cursor-pointer hover:text-yellow-400">Electronics</span>
                <span className="cursor-pointer hover:text-yellow-400">Computers</span>
                <span className="cursor-pointer hover:text-yellow-400">Gaming</span>
                <span className="cursor-pointer hover:text-yellow-400">Books</span>
            </div>
        </div>
    );
};

export default Navbar;