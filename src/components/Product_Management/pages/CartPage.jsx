import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import propTypes from 'prop-types'
import { Trash } from 'react-feather'

function CartPage({ cartItems, removeFromCart, updateQuantity }) {
    const itemRefs = useRef([]) // Initialize with an empty array

    // This effect only runs once when the component mounts and when new items are added
    useEffect(() => {
        // Reset itemRefs based on the number of cart items
        itemRefs.current = Array(cartItems.length)
            .fill()
            .map((_, i) => itemRefs.current[i] || null)

        // Animate cart items only when they are first added
        if (
            cartItems.length > 0 &&
            itemRefs.current.every((ref) => ref !== null)
        ) {
            gsap.fromTo(
                itemRefs.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power3.out',
                }
            )
        }
    }, [cartItems.length]) // Only trigger this effect when the number of cart items changes

    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)
    }

    const convertBlobToBase64 = (blob) => {
        if (!blob) return null

        const byteArray = new Uint8Array(blob.data)
        const base64String = btoa(
            byteArray.reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
            )
        )

        return `data:image/jpeg;base64,${base64String}`
    }

    const handleIncrease = (id, currentQuantity) => {
        updateQuantity(id, currentQuantity + 1)
    }

    const handleDecrease = (id, currentQuantity) => {
        if (currentQuantity > 1) {
            updateQuantity(id, currentQuantity - 1)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-8 text-center text-4xl font-bold">
                Shopping Cart
            </h1>
            <div className="grid grid-cols-1 gap-6">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div
                            key={item.id} // Use item.id instead of index to avoid key issues
                            ref={(el) => (itemRefs.current[index] = el)} // Attach GSAP ref to each item
                            className="flex flex-col items-center justify-between rounded bg-slate-800 p-4 shadow md:flex-row"
                        >
                            <div className="flex w-full items-center space-x-4 md:w-auto">
                                {item.image_url ? (
                                    <img
                                        className="mb-4 h-32 w-32 rounded-lg object-cover md:mb-0 md:h-48 md:w-48"
                                        src={item.image_url}
                                        alt={item.title}
                                    />
                                ) : (
                                    item.image && (
                                        <img
                                            className="mb-4 h-32 w-32 rounded-lg object-cover md:mb-0 md:h-48 md:w-48"
                                            src={convertBlobToBase64(
                                                item.image
                                            )}
                                            alt={item.title}
                                        />
                                    )
                                )}
                                <div className="flex flex-col">
                                    <h2 className="text-center text-lg font-semibold md:text-left">
                                        {item.title}
                                    </h2>
                                    <p className="text-center text-gray-400 md:text-left">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col items-center space-x-0 space-y-2 md:mt-0 md:flex-row md:space-x-4 md:space-y-0">
                                <div className="flex items-center">
                                    {/* Quantity controls */}
                                    <button
                                        onClick={() =>
                                            handleDecrease(
                                                item.id,
                                                item.quantity
                                            )
                                        }
                                        className="flex h-12 w-12 items-center justify-center rounded-l bg-gray-700 text-2xl text-white hover:bg-gray-600"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        readOnly
                                        className="h-12 w-16 border-0 bg-white text-center text-lg text-black"
                                    />
                                    <button
                                        onClick={() =>
                                            handleIncrease(
                                                item.id,
                                                item.quantity
                                            )
                                        }
                                        className="flex h-12 w-12 items-center justify-center rounded-r bg-gray-700 text-2xl text-white hover:bg-gray-600"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500"
                                >
                                    <Trash className="h-8 w-8" />
                                </button>
                            </div>
                            <p className="mt-4 text-center text-gray-400 md:text-right">
                                Total: $
                                {(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="mt-8 text-right">
                    <h2 className="text-2xl font-bold">
                        Total: ${calculateTotal()}
                    </h2>
                </div>
            )}
        </div>
    )
}

CartPage.propTypes = {
    cartItems: propTypes.array.isRequired,
    removeFromCart: propTypes.func.isRequired,
    updateQuantity: propTypes.func.isRequired,
}

export default CartPage
