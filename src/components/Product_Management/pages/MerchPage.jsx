import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async' // Import Helmet for meta tags
import CartPopOut from './CartPopOut'

function MerchPage({ addToCart, cartItems }) {
    const [products, setProducts] = useState([])
    const [confirmationMessage, setConfirmationMessage] = useState('')
    const [messagePosition, setMessagePosition] = useState({ top: 0, left: 0 })
    const [activeCardIndex, setActiveCardIndex] = useState(null)
    const [isAnimating, setIsAnimating] = useState([]) // Track animation status for each card

    // eslint-disable-next-line no-unused-vars
    const [metaTitle, setMetaTitle] = useState('Merch - Bow to the Corgi') // Default meta title
    const [metaDescription, setMetaDescription] = useState('') // Default meta description
    const [metaKeywords, setMetaKeywords] = useState('') // Default meta keywords

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
                setIsAnimating(new Array(data.length).fill(false))
                cardRefs.current = Array(data.length).fill(null)

                // Set meta description and keywords based on the first product as an example
                if (data.length > 0) {
                    setMetaDescription(
                        data[0].description || 'The best pet ever!'
                    )
                    setMetaKeywords(data[0].keywords || 'Corgi, Ruler, Bork')
                }
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
                        stagger: 0.1, // Reduced stagger for faster appearance
                        duration: 0.8, // Slightly increased duration for smoothness
                        ease: 'power3.out', // Smooth easing for fluid animation
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

            tl.to(cardRefs.current[activeCardIndex], {
                opacity: 0.5,
                duration: 0.3, // Slightly longer for smooth dimming
                ease: 'power2.out',
            })
            tl.fromTo(
                confirmRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' } // Slightly extended
            )
            tl.to(confirmRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.6, // Smooth hide animation
                ease: 'power2.out',
                delay: 1.5,
            })
            tl.to(cardRefs.current[activeCardIndex], {
                opacity: 1,
                duration: 0.3, // Restores opacity smoothly
                ease: 'power2.out',
            })
        }
    }, [confirmationMessage, activeCardIndex])

    const handleAddToCart = (product, index) => {
        if (isAnimating[index]) return

        setIsAnimating((prev) => {
            const updated = [...prev]
            updated[index] = true
            return updated
        })

        addToCart(product)

        setConfirmationMessage('')
        setTimeout(() => {
            setConfirmationMessage(`${product.title} added to cart!`)
        }, 0)

        setActiveCardIndex(index)

        const card = cardRefs.current[index]
        if (card) {
            const rect = card.getBoundingClientRect()
            const cardCenterX = rect.left + rect.width / 2
            const cardCenterY = rect.top + rect.height / 2

            setMessagePosition({
                top: cardCenterY + window.scrollY,
                left: cardCenterX + window.scrollX,
            })
        }
    }

    return (
        <div className="container z-10 mx-auto p-4">
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
            </Helmet>

            <CartPopOut cartItems={cartItems} />
            <h1 className="mb-8 text-center text-4xl font-bold">Merch</h1>

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

            <div
                ref={confirmRef}
                className="absolute z-50 rounded bg-green-500 p-2 text-center text-white shadow-lg"
                style={{
                    top: `${messagePosition.top}px`,
                    left: `${messagePosition.left}px`,
                    transform: 'translate(-50%, -50%)',
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
                            disabled={isAnimating[index]}
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
