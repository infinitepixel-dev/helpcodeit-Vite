import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { Trash } from 'react-feather'

import BandsInTownEvents from './BandsInTownEvents'

function Dashboard() {
    const [products, setProducts] = useState([])

    // GSAP Ref for the grid container
    const cardRefs = useRef([]) // Start with an empty array

    const apiUrl = `${window.location.protocol}//${window.location.hostname}:3082/api/products`

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err))
    }, [apiUrl])

    // Helper function to convert BLOB to base64 string
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

    // UseEffect to trigger GSAP animations on load
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

    // delete product
    const handleDelete = async (id) => {
        const deleteUrl = `${window.location.protocol}//${window.location.hostname}:3082/api/products/${id}`

        try {
            const response = await fetch(deleteUrl, {
                method: 'DELETE',
            })

            if (!response.ok) {
                const errorData = await response.json()
                console.error('Error:', errorData)
            } else {
                const data = await response.json()
                console.log('Product deleted:', data)

                // Update the products list after deletion
                setProducts((prevProducts) =>
                    prevProducts.filter((product) => product.id !== id)
                )
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-8 text-center text-4xl font-bold">
                Product Dashboard
            </h1>

            {/* Add Product Page */}
            <Link
                to="/add-product"
                className="mb-6 block text-center text-lg text-blue-500 hover:underline"
            >
                Add Product
            </Link>
            {/* Merch Page */}
            <Link
                to="/merch"
                className="mb-6 block text-center text-lg text-blue-500 hover:underline"
            >
                Merch
            </Link>
            {/* Cart Page */}
            <Link
                to="/cart"
                className="mb-6 block text-center text-lg text-blue-500 hover:underline"
            >
                Cart
            </Link>
            <Link
                to="/checkout"
                className="mb-6 block text-center text-lg text-blue-500 hover:underline"
            >
                Checkout
            </Link>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={(el) => (cardRefs.current[index] = el)} // Attach GSAP animation refs
                        className="transform rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform hover:scale-105"
                    >
                        {/* delete product with icon lucide react  */}
                        <button
                            onClick={() => handleDelete(product.id)}
                            className="absolute right-2 top-2 text-red-500"
                        >
                            <Trash />
                        </button>
                        <h2 className="mb-2 text-xl font-semibold text-gray-800">
                            {product.title}
                        </h2>
                        {/* Display either image_url or convert image blob to base64 */}
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
                        <p className="text-gray-600">
                            Category: {product.category}
                        </p>
                    </div>
                ))}
            </div>

            <BandsInTownEvents artistName="Metallica" />
        </div>
    )
}

export default Dashboard
