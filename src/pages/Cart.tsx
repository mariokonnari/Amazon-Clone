import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../store/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    );

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen max-w-4xl mx-auto px-8 py-12">
                <h2 className="text-2xl font-semibold">
                    Your cart is empty
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">
                Your Cart
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/*LEFT SIDE - CART ITEMS*/}
                <div className="flex-1 flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border p-4 rounded-lg"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain"
                                />
                                <div>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                            className="w-10 h-10 text-lg font-bold border rounded-lg hover:bg-gray-100 transition"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-semibold w-8 text-center">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => dispatch(increaseQuantity(item.id))}
                                            className="w-10 h-10 text-lg font-bold border rounded-lg hover:bg-gray-100 transition"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="text-gray-900 font-bold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    {cartItems.length > 1 && (
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-semibold transition">
                            🗑 Remove All Items
                        </button>
                    )}

                </div>
                {/*RIGHT SIDE - ORDER SUMMARY*/}
                <div className="lg:w-96 flex-shrink-0 self-start">
                    <div className="bg-white border rounded-xl shadow-md p-6 sticky top-8">
                        <h2 className="text-2xl font-bold mb-6">
                            Order Summary
                        </h2>

                        {(() => {
                            const subtotal = cartItems.reduce(
                                (acc, item) => acc + item.price * item.quantity, 0
                            );

                            const tax = subtotal * 0.1;
                            const total = subtotal + tax;

                            return (
                                <>
                                    <div className="flex justify-between mb-2">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between mb-2">
                                        <span>Shipping</span>
                                        <span className="text-green-600">Free</span>
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <span>Tax (10%)</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>

                                    <hr className="mb-4" />

                                    <div className="flex justify-between text-xl font-bold mb-6">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>

                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition">
                                        Proceed to Checkout
                                    </button>

                                    <div className="flex justify-center items-center gap-3 mt-4 text-gray-400 text-xs">
                                        <span className="border px-2 py-1 rounded">VISA</span>
                                        <span className="border px-2 py-1 rounded">Mastercard</span>
                                        <span className="border px-2 py-1 rounded">PayPal</span>
                                        <span className="border px-2 py-1 rounded">Apple Pay</span>
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Cart;