import { useContext, useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FaTrash, FaArrowDown } from 'react-icons/fa'

import { AuthContext } from './AuthContext'
import Login from './Login'
import Logout from './Logout'
import BandsInTownEvents from './BandsInTownEvents'

function Dashboard() {
    // Ref to track if component is mounted
    const hasMounted = useRef(false)

    const { user, login, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [products, setProducts] = useState([])
    const [editProduct, setEditProduct] = useState(null)
    const [editedData, setEditedData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image_url: '', // Default to an empty string
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
    })

    // State to manage image upload and image URL
    const [imageOption, setImageOption] = useState('image_url')
    const [imageFile, setImageFile] = useState(null)
    const [imageUrl, setImageUrl] = useState('')

    const cardRefs = useRef([])
    const trashIconRefs = useRef([])
    const arrowRefs = useRef([])
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const apiUrl = `${window.location.protocol}//${window.location.hostname}:3082`

    // Animation for trash icon on mount
    useEffect(() => {
        trashIconRefs.current.forEach((icon, index) => {
            if (icon) {
                gsap.set(icon, { scale: 0, opacity: 0 })
                gsap.to(icon, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)',
                    delay: index * 0.1, // Stagger animation for better effect
                })
            }
        })
    }, [products])

    // Handle user login from query parameters in URL
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const userParam = queryParams.get('user')

        if (userParam && !user) {
            const userData = JSON.parse(decodeURIComponent(userParam))
            if (userData.role !== 'admin') {
                navigate('/no-access')
            } else {
                login(userData)
            }
        }
    }, [location.search, user, login, navigate])

    // Fetch products from API
    useEffect(() => {
        if (user) {
            fetch(`${apiUrl}/api/products`)
                .then((res) => res.json())
                .then((data) => {
                    const updatedProducts = data.map((product) => ({
                        ...product,
                        image_url: product.image_url || '',
                        image: product.image || '',
                    }))
                    setProducts(updatedProducts)
                })
                .catch((err) => console.error(err))
        }
    }, [user, apiUrl])

    // // Animate product cards on mount
    // useEffect(() => {
    //     const validRefs = cardRefs.current.filter((ref) => ref !== null)
    //     if (validRefs.length > 0) {
    //         gsap.fromTo(
    //             validRefs,
    //             { opacity: 0, y: 50 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 stagger: 0.2,
    //                 duration: 1,
    //                 ease: 'power3.out',
    //             }
    //         )
    //     }
    // }, [products])

    // Animate product cards on initial mount
    useEffect(() => {
        if (!hasMounted.current) {
            const validRefs = cardRefs.current.filter((ref) => ref !== null)
            if (validRefs.length > 0) {
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
            hasMounted.current = true // Set the flag to true after initial mount
        }
    }, []) // Empty dependency array to run this effect only on mount

    // Fetch updated products list
    const fetchProducts = () => {
        fetch(`${apiUrl}/api/products`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err))
    }

    // Handle trash icon animation on click (turn and shake)
    const handleDeleteClick = (id, index) => {
        setSelectedProduct({ id, index })
        setShowModal(true) // Show the modal when delete is clicked
    }

    const confirmDelete = async () => {
        if (selectedProduct) {
            // Trash icon animation
            await gsap.to(trashIconRefs.current[selectedProduct.index], {
                rotate: 90,
                repeat: 3,
                yoyo: true,
                duration: 0.1,
            })

            // Proceed with deletion
            handleDelete(selectedProduct.id, selectedProduct.index)
            setShowModal(false)
            setSelectedProduct(null)
        }
    }

    //Hover effect for the down arrow
    useEffect(() => {
        if (hoveredIndex !== null && arrowRefs.current[hoveredIndex]) {
            gsap.to(arrowRefs.current[hoveredIndex], {
                opacity: 1,
                y: 10,
                duration: 0.3,
            })
        } else {
            gsap.to(arrowRefs.current, {
                opacity: 0,
                y: 0,
                duration: 0.3,
            })
        }
    }, [hoveredIndex])

    const closeModal = () => {
        setShowModal(false)
    }

    // Handle product deletion
    const handleDelete = async (id, index) => {
        // Animate only the trash icon and the specific card before deletion
        await gsap.to(trashIconRefs.current[index], {
            rotate: 90,
            repeat: 3,
            yoyo: true,
            duration: 0.1,
        })

        const deleteUrl = `${apiUrl}/api/products/${id}`
        try {
            const response = await fetch(deleteUrl, { method: 'DELETE' })
            if (!response.ok) {
                const errorData = await response.json()
                console.error('Error:', errorData)
            } else {
                // Animate the card itself before removing it
                await gsap.to(cardRefs.current[index], {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    onComplete: () => {
                        // Once the animation completes, remove the card from the DOM
                        setProducts((prevProducts) =>
                            prevProducts.filter((product) => product.id !== id)
                        )
                    },
                })
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        // Animate down arrow on hover
        if (hoveredIndex !== null) {
            gsap.to(arrowRefs.current[hoveredIndex], {
                opacity: 1,
                y: 10,
                duration: 0.3,
            })
        } else {
            arrowRefs.current.forEach((arrow) =>
                gsap.to(arrow, { opacity: 0, y: 0, duration: 0.3 })
            )
        }
    }, [hoveredIndex])

    // Edit product handler
    const handleEditClick = (product) => {
        setEditedData({
            title: product.title || '',
            price: product.price || '',
            description: product.description || '',
            category: product.category || '',
            image_url: product.image_url || '',
            meta_title: product.meta_title || '',
            meta_description: product.meta_description || '',
            meta_keywords: product.meta_keywords || '',
        })
        setImageOption(product.image_url ? 'image_url' : 'image_upload')
        setImageUrl(product.image_url || '')
        setImageFile(null)
        setEditProduct(product.id)
    }

    // Input change handler for form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setEditedData((prevData) => ({ ...prevData, [name]: value }))
    }

    // Handle image option change (URL or upload)
    const handleImageOptionChange = (e) => {
        const selectedOption = e.target.value
        setImageOption(selectedOption)

        if (selectedOption === 'image_url') {
            setImageFile(null)
            setImageUrl(editedData.image_url || '')
        } else if (selectedOption === 'image_upload') {
            setImageUrl('')
        }
    }

    // Convert blob data to base64 string for image display
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

    // Handle file upload for image
    const handleFileChange = (e) => {
        setImageFile(e.target.files[0] || null)
    }

    // Handle image URL input change
    const handleImageUrlChange = (e) => {
        const value = e.target.value
        setImageUrl(value)
        setEditedData((prevData) => ({ ...prevData, image_url: value }))
    }

    // Save product changes
    const handleSave = async (id) => {
        const updateUrl = `${apiUrl}/api/products/${id}`
        const formData = new FormData()

        // Add form data excluding image_url
        for (const key in editedData) {
            if (key !== 'image_url') {
                formData.append(key, editedData[key])
            }
        }

        // Add image file or URL based on the selected option
        if (imageOption === 'image_upload' && imageFile) {
            formData.append('image', imageFile)
        } else if (imageOption === 'image_url' && imageUrl) {
            formData.append('image_url', imageUrl)
        }

        try {
            const response = await fetch(updateUrl, {
                method: 'PUT',
                body: formData,
            })
            if (!response.ok) {
                const errorData = await response.json()
                console.error('Error:', errorData)
            } else {
                fetchProducts()
                setEditProduct(null)
            }
        } catch (err) {
            console.error(err)
        }
    }

    // Cancel editing mode
    const handleCancel = () => {
        setEditProduct(null)
        setEditedData({
            title: '',
            price: '',
            description: '',
            category: '',
            image_url: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
        })
        setImageFile(null)
        setImageUrl('')
    }

    if (loading) return <div>Loading...</div>

    if (!user) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="mb-8 text-center text-4xl font-bold text-white">
                    Product Dashboard
                </h1>
                <div className="text-center">
                    <Login />
                </div>
            </div>
        )
    }

    // Tailwind CSS horizontal rule
    const tailWindHR = () => (
        <div className="flex items-center">
            <div className="m-1 w-full border-b border-zinc-300"></div>
        </div>
    )

    return (
        <div className="container mx-auto p-4">
            <Logout />
            <h1 className="mb-8 text-center text-4xl font-bold text-white">
                Product Dashboard
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

            {/* Product Grid */}
            <div className="grid auto-rows-[minmax(auto,1fr)] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="group relative flex flex-col justify-between rounded-lg border border-gray-300 bg-white p-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <button
                            onClick={() => handleDeleteClick(product.id, index)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="absolute right-1 top-1 text-red-500 transition-colors duration-300 hover:text-red-700"
                            aria-label={`Delete ${product.title}`}
                        >
                            {/* Trash Icon - Wrap it in a span for ref */}
                            <span
                                ref={(el) =>
                                    (trashIconRefs.current[index] = el)
                                }
                            >
                                <FaTrash className="h-8 w-8" />
                            </span>

                            {/* Down Arrow - Wrap it in a span for ref */}
                            <span
                                ref={(el) => (arrowRefs.current[index] = el)}
                                className="absolute left-2 top-0 h-4 w-4 text-white opacity-0"
                            >
                                <FaArrowDown />
                            </span>
                        </button>

                        {/* Edit Mode */}
                        {editProduct === product.id ? (
                            <div className="rounded-lg bg-slate-200 p-2  text-gray-800">
                                {/* Form Group */}
                                <div className="mb-0 ">
                                    <label
                                        htmlFor="title"
                                        className="mb-1 block font-medium"
                                    >
                                        Title
                                    </label>

                                    {/* Product Title Input */}
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={editedData.title}
                                        onChange={handleInputChange}
                                        className="mb-1.5 w-full rounded-lg border border-gray-300 "
                                    />
                                </div>
                                {tailWindHR()}

                                {/* Image Selection */}
                                <div className="mb-0">
                                    <label
                                        htmlFor="imageOption"
                                        className="mb-1 block font-medium"
                                    >
                                        Choose Image Option
                                    </label>

                                    {/* Image Option Select */}
                                    <select
                                        id="imageOption"
                                        name="imageOption"
                                        value={imageOption}
                                        onChange={handleImageOptionChange}
                                        className="w-full rounded-lg border border-gray-300 p-2"
                                    >
                                        <option value="image_url">
                                            Use Image URL
                                        </option>
                                        <option value="image_upload">
                                            Upload New Image
                                        </option>
                                    </select>
                                </div>

                                {imageOption === 'image_url' ? (
                                    <div className="mb-4">
                                        <label
                                            htmlFor="image_url"
                                            className="mb-1 block font-medium"
                                        >
                                            Image URL
                                        </label>

                                        {/* Image URL Input */}
                                        <input
                                            type="text"
                                            id="image_url"
                                            name="image_url"
                                            value={imageUrl}
                                            onChange={handleImageUrlChange}
                                            className="w-full rounded-lg border border-gray-300 p-2"
                                        />
                                    </div>
                                ) : (
                                    <div className="mb-4 ">
                                        <label
                                            htmlFor="image_upload"
                                            className="mb-1 block font-medium"
                                        >
                                            Upload Image
                                        </label>

                                        {/* Image Upload Input */}
                                        <input
                                            type="file"
                                            id="image_upload"
                                            onChange={handleFileChange}
                                            className="w-full rounded-lg border border-gray-300 p-2"
                                        />

                                        {tailWindHR()}
                                    </div>
                                )}

                                {/* Meta Data */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="meta_title"
                                        className="mb-1 block font-medium"
                                    >
                                        Meta Title
                                    </label>

                                    {/* Meta Title Input */}
                                    <input
                                        type="text"
                                        id="meta_title"
                                        name="meta_title"
                                        value={editedData.meta_title}
                                        onChange={handleInputChange}
                                        className="mb-1.5 w-full rounded-lg border border-gray-300 "
                                    />
                                    {tailWindHR()}
                                    <label
                                        htmlFor="meta_description"
                                        className="mb-1 block font-medium"
                                    >
                                        Meta Description
                                    </label>

                                    {/* Meta Description Input */}
                                    <textarea
                                        id="meta_description"
                                        name="meta_description"
                                        value={editedData.meta_description}
                                        onChange={handleInputChange}
                                        className="w-full resize-none overflow-hidden rounded-lg border border-gray-300"
                                        rows={1} // Start with 1 row
                                        onInput={(e) => {
                                            e.target.style.height = 'auto'
                                            e.target.style.height = `${e.target.scrollHeight}px`
                                        }}
                                    ></textarea>

                                    {tailWindHR()}
                                    <label
                                        htmlFor="meta_keywords"
                                        className="mb-1 block font-medium"
                                    >
                                        Meta Keywords
                                    </label>

                                    {/* Meta Keywords Input */}
                                    <textarea
                                        id="meta_keywords"
                                        name="meta_keywords"
                                        value={editedData.meta_keywords}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border border-gray-300 "
                                    ></textarea>
                                    {tailWindHR()}
                                </div>

                                {/* Save and Cancel Buttons */}
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={() => handleSave(product.id)}
                                        className="rounded-lg bg-green-600 px-4 py-2 text-white transition duration-300 hover:bg-green-800"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="rounded-lg bg-red-600 px-4 py-2 text-white transition duration-300 hover:bg-red-800"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-auto">
                                {/*ANCHOR  Display Product Info */}

                                {/* Product Title */}
                                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                                    {product.title}
                                </h2>

                                {product.image_url ? (
                                    // Display image URL if available
                                    <img
                                        className="mb-4 h-48 w-full rounded-lg object-contain"
                                        src={product.image_url}
                                        alt={`${product.title} product image`}
                                    />
                                ) : product.image ? (
                                    // Display Image file if available
                                    <img
                                        className="mb-4 h-48 w-full rounded-lg object-contain"
                                        src={convertBlobToBase64(product.image)}
                                        alt={`${product.title} product image`}
                                    />
                                ) : (
                                    <div className="text-gray-500">
                                        No image available
                                    </div>
                                )}

                                <div className="rounded-lg bg-slate-200 p-2  text-gray-800">
                                    {/* Product Description */}
                                    <p className="mb-2 text-gray-700">
                                        {product.description}
                                    </p>

                                    {tailWindHR()}

                                    {/* Product Price */}
                                    <p className="mb-2 font-bold text-gray-900">
                                        Price: ${product.price}
                                    </p>

                                    {/* Product Category */}
                                    <p className="text-gray-600">
                                        Category: {product.category}
                                    </p>

                                    {tailWindHR()}

                                    {/* Meta Data */}

                                    {/* Meta Title */}
                                    <p className="text-gray-600">
                                        Meta Title: {product.meta_title}
                                    </p>

                                    {tailWindHR()}

                                    {/* Meta Description */}
                                    <p className="text-gray-600">
                                        Meta Description:{' '}
                                        {product.meta_description}
                                    </p>

                                    {tailWindHR()}

                                    {/* Meta Keywords */}
                                    <p className="text-gray-600">
                                        Meta Keywords: {product.meta_keywords}
                                    </p>

                                    {tailWindHR()}

                                    {/* Edit Button */}
                                    <button
                                        onClick={() => handleEditClick(product)}
                                        className="mt-4 w-full rounded-lg bg-yellow-600 px-4 py-2 text-white transition duration-300 hover:bg-yellow-800"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Delete Confirmation Modal */}
                {showModal && (
                    <div className="payment-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
                        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                            <h2 className="mb-4 text-2xl font-bold">
                                Delete Product
                            </h2>
                            <p className="mb-4">
                                Are you sure you want to delete this product?
                            </p>
                            <button
                                className="mr-4 rounded-lg bg-red-500 px-4 py-2 text-white shadow transition hover:bg-red-700"
                                onClick={confirmDelete}
                            >
                                Confirm
                            </button>
                            <button
                                className="rounded-lg bg-gray-500 px-4 py-2 text-white shadow transition hover:bg-gray-700"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <BandsInTownEvents artistName="Metallica" />
        </div>
    )
}

export default Dashboard
