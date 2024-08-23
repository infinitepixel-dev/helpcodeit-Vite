import { useState, useEffect, useRef } from 'react'
import propTypes from 'prop-types'
import { gsap } from 'gsap'
import CartPopOut from './CartPopOut'

function MerchPage({ addToCart, cartItems }) {
    const [products, setProducts] = useState([])
    const [confirmationMessage, setConfirmationMessage] = useState('')
    const [messagePosition, setMessagePosition] = useState({ top: 0, left: 0 })
    const [activeCardIndex, setActiveCardIndex] = useState(null)
    const [isAnimating, setIsAnimating] = useState([]) // Track animation status for each card

    // GSAP Ref for the confirmation message
    const confirmRef = useRef(null)
    const cardRefs = useRef([])

    const apiUrl = `${window.location.protocol}//${window.location.hostname}:3082/api/products`

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

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                // Initialize isAnimating array to false for each card
                setIsAnimating(new Array(data.length).fill(false))
                // Reset cardRefs after products have been fetched
                cardRefs.current = Array(data.length).fill(null)
            })
            .catch((err) => console.error(err))
    }, [apiUrl])

    useEffect(() => {
        if (products.length > 0) {
            const validRefs = cardRefs.current.filter((ref) => ref !== null)
            if (validRefs.length === products.length) {
                gsap.fromTo(
                    validRefs,
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
        }
    }, [products])

    useEffect(() => {
        if (confirmationMessage && activeCardIndex !== null) {
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsAnimating((prev) => {
                        const updated = [...prev]
                        updated[activeCardIndex] = false
                        return updated
                    })
                },
            })

            // Dim the card by reducing its opacity slightly
            tl.to(cardRefs.current[activeCardIndex], {
                opacity: 0.5,
                duration: 0.2,
                ease: 'power2.out',
            })
            // Animate the confirmation message
            tl.fromTo(
                confirmRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            )
            // Hide the confirmation and restore the card opacity
            tl.to(confirmRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: 'power2.out',
                delay: 1.5, // Delay before fading out
            })
            tl.to(cardRefs.current[activeCardIndex], {
                opacity: 1,
                duration: 0.2,
                ease: 'power2.out',
            })
        }
    }, [confirmationMessage, activeCardIndex])

    const handleAddToCart = (product, index) => {
        if (isAnimating[index]) return // Block clicks if animation is running on this card

        setIsAnimating((prev) => {
            const updated = [...prev]
            updated[index] = true
            return updated
        }) // Set animation flag for this specific card

        addToCart(product)

        // Reset the message to force re-triggering the animation
        setConfirmationMessage('')

        setTimeout(() => {
            setConfirmationMessage(`${product.title} added to cart!`)
        }, 0) // Delay to ensure the state change is applied

        setActiveCardIndex(index)

        const card = cardRefs.current[index]
        if (card) {
            const rect = card.getBoundingClientRect()

            // Calculate the center of the card
            const cardCenterX = rect.left + rect.width / 2
            const cardCenterY = rect.top + rect.height / 2

            // Set the confirmation message position to the card's center
            setMessagePosition({
                top: cardCenterY + window.scrollY,
                left: cardCenterX + window.scrollX,
            })
        }
    }

    return (
        <div className="container z-10 mx-auto p-4">
            <CartPopOut cartItems={cartItems} />
            <h1 className="mb-8 text-center text-4xl font-bold">Merch</h1>

            {/* Confirmation message */}
            <div
                ref={confirmRef}
                className="absolute z-50 rounded bg-green-500 p-2 text-center text-white shadow-lg"
                style={{
                    top: `${messagePosition.top}px`,
                    left: `${messagePosition.left}px`,
                    transform: 'translate(-50%, -50%)', // Center the message
                    opacity: 0,
                }}
            >
                {confirmationMessage}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`transform rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-all hover:scale-105 hover:shadow-2xl ${
                            activeCardIndex === index ? 'relative z-20' : 'z-10'
                        }`}
                    >
                        <h2 className="mb-2 text-xl font-semibold text-gray-800">
                            {product.title}
                        </h2>
                        {product.image_url ? (
                            <img
                                className="mb-4 h-48 w-full rounded-lg object-cover"
                                src={product.image_url}
                                alt={product.title}
                            />
                        ) : (
                            product.image && (
                                <img
                                    className="mb-4 h-48 w-full rounded-lg object-cover"
                                    src={convertBlobToBase64(product.image)}
                                    alt={product.title}
                                />
                            )
                        )}
                        <p className="mb-2 text-gray-700">
                            {product.description}
                        </p>
                        <p className="mb-2 font-bold text-gray-900">
                            Price: ${product.price}
                        </p>
                        <button
                            onClick={() => handleAddToCart(product, index)}
                            className={`w-full rounded bg-blue-500 py-2 text-white transition-colors hover:bg-blue-600 ${
                                isAnimating[index]
                                    ? 'cursor-not-allowed opacity-50'
                                    : ''
                            }`}
                            disabled={isAnimating[index]} // Disable button during animation for this specific card
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

MerchPage.propTypes = {
    addToCart: propTypes.func.isRequired,
    cartItems: propTypes.array.isRequired,
}

export default MerchPage
