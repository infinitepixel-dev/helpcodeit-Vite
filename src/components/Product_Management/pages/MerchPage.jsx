import { useState, useEffect, useRef } from 'react'
import propTypes from 'prop-types'
import { gsap } from 'gsap'

function MerchPage({ addToCart }) {
    const [products, setProducts] = useState([])
    const [confirmationMessage, setConfirmationMessage] = useState('')

    // GSAP Ref for the grid container and confirmation message
    const cardRefs = useRef([])
    const confirmRef = useRef(null)

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
                // Reset cardRefs after products have been fetched
                cardRefs.current = cardRefs.current
                    .slice(0, data.length)
                    .map(() => null)
            })
            .catch((err) => console.error(err))
    }, [apiUrl])

    useEffect(() => {
        if (products.length > 0) {
            const validRefs = cardRefs.current.filter((ref) => ref !== null)
            // Ensure GSAP only targets valid refs
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

    const handleAddToCart = (product) => {
        addToCart(product)
        setConfirmationMessage(`${product.title} added to cart!`)
        gsap.fromTo(
            confirmRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
        setTimeout(() => {
            gsap.to(confirmRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: 'power2.out',
            })
        }, 1500)
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-8 text-center text-4xl font-bold">Merch</h1>

            {/* Confirmation message */}
            <div
                ref={confirmRef}
                className="fixed right-4 top-4 rounded bg-green-500 p-2 text-white shadow-lg"
                style={{ opacity: 0 }}
            >
                {confirmationMessage}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="transform rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
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
                            onClick={() => handleAddToCart(product)}
                            className="w-full rounded bg-blue-500 py-2 text-white transition-colors hover:bg-blue-600"
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
}

export default MerchPage
