const HeroBanner = () => {
    return(
        <section 
            className="relative w-full min-h-[400px] bg-cover bg-center flex items-center"
            style={{
                backgroundImage: "url('https://picsum.photos/1920/800')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Discover Amazing Deals
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Shop the latest products at unbeatable prices.
                </p>
                <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition">
                    Shop Now
                </button>
            </div>
        </section>
    );
};

export default HeroBanner;