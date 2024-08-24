import { useState } from 'react'
import { gsap } from 'gsap'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, ChevronLeft, ChevronRight } from 'react-feather'

function CartPopOut({ cartItems }) {
    const [isVisible, setIsVisible] = useState(false)

    // Function to toggle the cart sidebar
    const toggleCart = () => {
        if (cartItems.length === 0) return // Do nothing if the cart is empty

        if (isVisible) {
            // Close cart
            gsap.to('.cart-sidebar', {
                x: '100%', // Move sidebar out of view
                duration: 0.5,
                ease: 'power3.in',
                onComplete: () => setIsVisible(false), // Set to false after animation
            })
        } else {
            // Open cart
            setIsVisible(true)
            gsap.to('.cart-sidebar', {
                x: 0, // Move sidebar into view
                duration: 0.5,
                ease: 'power3.out',
            })
        }
    }

    return (
        <>
            {/* Button to open/close the cart sidebar */}
            <button
                style={{
                    zIndex: 1200, // Ensure button is always on top of the sidebar
                    right: '16px', // Adjust position for visibility
                    top: '72px',
                    position: 'fixed',
                    opacity: cartItems.length === 0 ? 0.5 : 1, // Reduce opacity if the cart is empty
                    cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer', // Change cursor style if empty
                }}
                onClick={toggleCart}
                className={`fixed rounded px-4 py-2 text-white ${
                    cartItems.length === 0 ? 'bg-gray-400' : 'bg-blue-500'
                }`} // Change background color if empty
                disabled={cartItems.length === 0} // Disable the button if the cart is empty
            >
                {isVisible ? (
                    <div>
                        <span className="flex items-center">
                            <ShoppingCart />
                            <ChevronRight />
                        </span>
                    </div>
                ) : (
                    <div>
                        <span className="flex items-center">
                            <ShoppingCart />
                            <ChevronLeft />
                        </span>
                    </div>
                )}
            </button>

            {/* Cart Sidebar */}
            <div
                className={`cart-sidebar fixed right-0 top-16 h-full transform bg-white shadow-lg ${
                    isVisible ? '' : 'translate-x-full'
                }`}
                style={{
                    width: isVisible ? '80vw' : '100vw',
                    maxWidth: '320px', // Max width for larger screens
                    transform: 'translateX(100%)',
                    zIndex: 1100, // Ensure the cart sidebar is just below the button
                }}
            >
                <div className="flex h-full flex-col">
                    {/* Cart Items Section (Scrollable) */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <h2 className="mb-4 text-2xl font-bold">Your Cart</h2>

                        {/* List cart items */}
                        {cartItems.length > 0 ? (
                            <>
                                <ul>
                                    {cartItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="mb-4 border-b border-gray-200 pb-4"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-semibold text-black">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-black">
                                                        Quantity:{' '}
                                                        {item.quantity}
                                                    </p>
                                                </div>
                                                <p className="text-black">
                                                    ${item.price}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>

                    {/* Cart Footer (Fixed at the Bottom) */}
                    {cartItems.length > 0 && (
                        <div className="sticky bottom-0 bg-white p-4 shadow-lg">
                            {/* cart total */}
                            <div className="mt-4">
                                <p className="text-lg font-semibold text-black">
                                    Total: $
                                    {cartItems
                                        .reduce(
                                            (acc, item) =>
                                                acc +
                                                item.price * item.quantity,
                                            0
                                        )
                                        .toFixed(2)}
                                </p>
                            </div>

                            {/* Button to go to the full cart view */}
                            <button className="mt-4 w-full rounded bg-green-500 py-2 text-white hover:bg-green-600">
                                <NavLink to="/cart">View Full Cart</NavLink>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

CartPopOut.propTypes = {
    cartItems: propTypes.arrayOf(
        propTypes.shape({
            title: propTypes.string.isRequired,
            price: propTypes.string.isRequired,
            quantity: propTypes.number.isRequired,
        })
    ).isRequired,
}

export default CartPopOut
