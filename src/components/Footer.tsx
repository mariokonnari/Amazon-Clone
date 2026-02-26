const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-12">
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <h3 className="font-bold mb-3">Get to Know Us</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">About Mariozon</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press Releases</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-3">Make money with us</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Sell on Mariozon</li>
                        <li className="hover:text-white cursor-pointer">Become and Affiliate</li>
                        <li className="hover:text-white cursor-pointer">Advertise Your Products</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-3">Let Us Help You</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Your Account</li>
                        <li className="hover:text-white cursor-pointer">Return Center</li>
                        <li className="hover:text-white cursor-pointer">Help</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-3">Connect With Us</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Facebook</li>
                        <li className="hover:text-white cursor-pointer">Instagram</li>
                        <li className="hover:text-white cursor-pointer">Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
                <p>© 2026 Mariozon. All rights reserved.</p>
                <p>Created by Marios Konnaris - github.com/mariokonnari</p>
            </div>
        </footer>
    );
}

export default Footer;