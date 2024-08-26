import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import propTypes from 'prop-types'
import { Trash, Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'

function CartPage({ cartItems, setCartItems, removeFromCart, updateQuantity }) {
    const itemRefs = useRef([]) // Initialize with an empty array
    const [isModalVisible, setIsModalVisible] = useState(false) // Track modal visibility
    const [itemToDelete, setItemToDelete] = useState(null) // Track which item to delete
    const [deletingItemIndex, setDeletingItemIndex] = useState(null) // Track the index of the item being deleted
    const [isEmptyCartModalVisible, setIsEmptyCartModalVisible] =
        useState(false) // Track empty cart modal

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

    const handleIncrease = (id, currentQuantity) => {
        updateQuantity(id, currentQuantity + 1)
    }

    const handleDecrease = (id, currentQuantity) => {
        if (currentQuantity > 1) {
            updateQuantity(id, currentQuantity - 1)
        }
    }

    const showDeleteModal = (item, index) => {
        setItemToDelete(item)
        setDeletingItemIndex(index)
        setIsModalVisible(true)
    }

    const handleDeleteConfirm = () => {
        if (deletingItemIndex !== null) {
            // Animate item removal
            const tl = gsap.timeline({
                onComplete: () => {
                    // Remove the item from the cart after animation completes
                    removeFromCart(itemToDelete.id)
                    setIsModalVisible(false) // Hide modal after deletion
                },
            })

            tl.to(itemRefs.current[deletingItemIndex], {
                opacity: 0,
                y: -50,
                duration: 0.5,
                ease: 'power3.in',
            })
        }
    }

    const handleDeleteCancel = () => {
        setIsModalVisible(false)
    }

    // Show the confirmation modal before emptying the cart
    const handleEmptyCartClick = () => {
        setIsEmptyCartModalVisible(true)
    }

    // Confirm emptying the cart
    const handleEmptyCartConfirm = () => {
        setCartItems([]) // Clear all cart items at once
        setIsEmptyCartModalVisible(false) // Hide the modal
    }

    // Cancel emptying the cart
    const handleEmptyCartCancel = () => {
        setIsEmptyCartModalVisible(false)
    }

    return (
        <div className="container-fluid mx-auto mb-20 mt-4 p-4">
            <h1 className="mb-8 text-center text-4xl font-bold">
                Shopping Cart
            </h1>
            {/* Navigation */}
            <nav aria-label="Page navigation" className="mb-6">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link
                            to="/add-product"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/merch"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Merch Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Cart Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/checkout"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                            Checkout Page
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="grid grid-cols-1 gap-6">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div
                            key={item.id}
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

                                {/* Delete Button */}
                                <button
                                    onClick={() => showDeleteModal(item, index)}
                                    className="relative text-red-500"
                                >
                                    <Trash className="h-8 w-8" />
                                </button>
                            </div>
                            <p className="mt-4 text-center text-gray-400 md:text-right">
                                Total: $
                                {(item.price * item.quantity).toFixed(2)}
                            </p>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500"
                            ></button>
                        </div>
                    ))
                )}
            </div>

            {cartItems.length > 0 && (
                <>
                    <div className="mt-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">
                            Total: ${calculateTotal()}
                        </h2>
                        <Link
                            to="/checkout"
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>

                    <div>
                        <span
                            onClick={handleEmptyCartClick} // Show confirmation modal
                            className="relative top-4 cursor-pointer text-rose-500"
                        >
                            <div className="flex-between flex">
                                Empty Cart <Trash2 className="h-8 w-8" />
                            </div>
                        </span>
                    </div>
                </>
            )}

            {/* Delete Confirmation Modal */}
            {isModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-96 rounded-lg bg-white bg-opacity-90 p-6 text-black shadow-lg">
                        <h2 className="mb-4 text-lg font-bold">
                            Confirm Deletion
                        </h2>
                        <p className="mb-4">
                            Are you sure you want to remove{' '}
                            <strong>{itemToDelete.title}</strong> from the cart?
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleDeleteCancel}
                                className="rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirm}
                                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Empty Cart Confirmation Modal */}
            {isEmptyCartModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-96 rounded-lg bg-white bg-opacity-90 p-6 text-black shadow-lg">
                        <h2 className="mb-4 text-lg font-bold">
                            Confirm Empty Cart
                        </h2>
                        <p className="mb-4">
                            Are you sure you want to empty your entire cart?
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleEmptyCartCancel}
                                className="rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleEmptyCartConfirm}
                                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                            >
                                Empty Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

CartPage.propTypes = {
    cartItems: propTypes.array.isRequired,
    setCartItems: propTypes.func.isRequired,
    removeFromCart: propTypes.func.isRequired,
    updateQuantity: propTypes.func.isRequired,
}

export default CartPage
