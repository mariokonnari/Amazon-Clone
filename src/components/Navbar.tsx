const Navbar = () => {
    return(
        <nav className="flex items-center justify-between bg-gray-900 text-white px-4 py-2">
            {/*Left Side - Logo*/}
            <div>
                <h2 className="text-xl font-bold cursor-pointer">Mariozon</h2>
            </div>
            {/*Middle - Search Bar*/}
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="px-3 py-2 w-64 rounded-md text-black outline-none"
                />
                <button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition">Search</button>
            </div>
            {/*Right Side - Sign In & Cart*/}
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">Sign In</button>
                <button className="flex items-center gap-1 hover:text-yellow-400 transition">
                    🛒 <span className="font-bold">0</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;