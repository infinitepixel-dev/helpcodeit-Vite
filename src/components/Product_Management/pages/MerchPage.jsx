import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async' // Import Helmet for meta tags
import CartPopOut from '@/components/Product_Management/sub_components/sub-menus/CartPopOut'

function MerchPage({ addToCart, cartItems }) {
    const [products, setProducts] = useState([])
    const [confirmationMessage, setConfirmationMessage] = useState('')
    const [messagePosition, setMessagePosition] = useState({ top: 0, left: 0 })
    const [activeCardIndex, setActiveCardIndex] = useState(null)
    const [isAnimating, setIsAnimating] = useState([]) // Track animation status for each card
    const [selectedProduct, setSelectedProduct] = useState(null) // State to track selected product for modal
    const [isModalOpen, setIsModalOpen] = useState(false) // State for modal visibility

    // eslint-disable-next-line no-unused-vars
    const [metaTitle, setMetaTitle] = useState('Merch - Bow to the Corgi') // Default meta title
    const [metaDescription, setMetaDescription] = useState('') // Default meta description
    const [metaKeywords, setMetaKeywords] = useState('') // Default meta keywords

    // GSAP Ref for the confirmation message
    const confirmRef = useRef(null)
    const cardRefs = useRef([])
    // Ref for the modal
    const modalRef = useRef(null) //determins if the image modal is open or not

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

    // Function to open modal when clicking on a product image
    const handleImageClick = (product) => {
        if (product.image || product.image_url) {
            setSelectedProduct(product) // Set selected product for the modal
            setIsModalOpen(true) // Open the modal
        }
    }

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProduct(null)
    }

    // Detect clicks outside of the modal to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal()
            }
        }

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isModalOpen])

    // Fetch products and set animations for each card
    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setIsAnimating(new Array(data.length).fill(false)) // Initialize animation status for each product
                cardRefs.current = Array(data.length).fill(null) // Initialize refs for each product card

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

    // GSAP entrance animation for product cards
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

    // GSAP animation for confirmation message
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

    // GSAP hover effect for scaling cards on hover
    useEffect(() => {
        // Loop through each card ref and add GSAP hover animation
        cardRefs.current.forEach((card) => {
            if (card) {
                // Set initial scale to 1
                gsap.set(card, { scale: 1 })

                // Add hover effect: scale up on mouse enter
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        scale: 1.05,
                        duration: 0.1, // Fast duration for scaling
                        ease: 'power2.out',
                        immediateRender: true, // Ensures animation starts immediately
                        overwrite: 'auto', // Cancels any existing animations on this element
                    })
                })

                // Scale back to normal on mouse leave
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        scale: 1,
                        duration: 0.1, // Fast duration for scaling back
                        ease: 'power2.out',
                        overwrite: 'auto', // Ensure smooth transition back
                    })
                })
            }
        })
    }, [products]) // Only run when products are updated

    // Handle adding product to the cart
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
                            className="text-lg font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Add Product"
                        >
                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/merch"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Merch Page"
                        >
                            Merch Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Cart Page"
                        >
                            Cart Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/checkout"
                            className="text-lg font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Checkout Page"
                        >
                            Checkout Page
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Confirmation Message Popup */}
            <div
                ref={confirmRef}
                className="absolute z-50 rounded bg-green-500 p-2 text-center text-white shadow-lg"
                style={{
                    top: `${messagePosition.top}px`,
                    left: `${messagePosition.left}px`,
                    transform: 'translate(-50%, -50%)',
                    opacity: 0,
                }}
                role="alert"
                aria-live="assertive"
            >
                {confirmationMessage}
            </div>

            {/* Product Grid */}
            <div className="grid auto-rows-min grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`duration-50 group relative flex transform flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform hover:scale-105 hover:shadow-xl`}
                        style={{
                            height: 'auto',
                            alignSelf: 'start',
                            overflow: 'hidden',
                        }}
                        role="region"
                        aria-labelledby={`product-title-${product.id}`}
                    >
                        <h2
                            id={`product-title-${product.id}`}
                            className="mb-2 text-2xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600"
                        >
                            {product.title}
                        </h2>
                        {product.image_url ? (
                            <img
                                className="mb-4 h-48 w-full rounded-lg object-cover shadow-sm transition-all duration-200 hover:shadow-md"
                                src={product.image_url}
                                alt={`${product.title} product image`}
                                onClick={() => handleImageClick(product)}
                            />
                        ) : product.image ? (
                            <img
                                className="mb-4 h-48 w-full rounded-lg object-cover shadow-sm transition-all duration-200 hover:shadow-md"
                                src={convertBlobToBase64(product.image)}
                                alt={`${product.title} product image`}
                                onClick={() => handleImageClick(product)}
                            />
                        ) : (
                            <img
                                className="mb-4 h-48 w-full rounded-lg object-cover shadow-sm transition-all duration-200 hover:shadow-md"
                                src="public/images/no-image.webp"
                                alt="No image available"
                            />
                        )}
                        <p className="mb-4 text-sm leading-relaxed text-gray-700">
                            {product.description}
                        </p>
                        <p className="mb-4 text-lg font-bold text-gray-900">
                            Price: ${product.price}
                        </p>
                        <button
                            onClick={() => handleAddToCart(product, index)}
                            className={`w-full rounded bg-gradient-to-r from-blue-500 to-blue-600 py-2 text-white transition-all duration-200 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                isAnimating[index]
                                    ? 'cursor-not-allowed opacity-50'
                                    : ''
                            }`}
                            disabled={isAnimating[index]}
                            aria-disabled={isAnimating[index]}
                            aria-label={`Add ${product.title} to cart`}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for viewing product image */}
            {isModalOpen && selectedProduct && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className="relative mx-auto max-h-screen w-full max-w-lg overflow-y-auto rounded-lg bg-white p-4 text-black shadow-lg md:p-6"
                        ref={modalRef}
                        role="document"
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute right-4 top-4 p-2 text-2xl font-bold md:text-lg"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <img
                            className="h-60 w-full object-contain md:h-96"
                            src={
                                selectedProduct.image_url ||
                                convertBlobToBase64(selectedProduct.image)
                            }
                            alt={selectedProduct.title}
                        />
                        <h2
                            id="modal-title"
                            className="mt-4 text-center text-xl font-semibold md:text-2xl"
                        >
                            {selectedProduct.title}
                        </h2>
                        <p className="mt-2 text-center text-sm md:text-base">
                            {selectedProduct.description}
                        </p>
                        <p className="mt-2 text-center text-lg font-bold">
                            Price: ${selectedProduct.price}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

MerchPage.propTypes = {
    addToCart: propTypes.func.isRequired,
    cartItems: propTypes.array.isRequired,
}

export default MerchPage
