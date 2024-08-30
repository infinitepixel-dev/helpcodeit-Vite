import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function AddProductForm() {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        payment_id: '',
        image_url: '', // Always initialize with an empty string to make it controlled
        image: null, // For uploaded image file, initialized with null
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
    })

    const [selectedImageType, setSelectedImageType] = useState('file') // Track selected image type
    const [preview, setPreview] = useState('') // For image preview

    // Ref for GSAP animations
    const formRef = useRef(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        const img = document.createElement('img')
        const reader = new FileReader()

        reader.onload = (event) => {
            img.src = event.target.result
            img.onload = () => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                const MAX_WIDTH = 800
                const MAX_HEIGHT = 800
                let width = img.width
                let height = img.height

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width
                        width = MAX_WIDTH
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height
                        height = MAX_HEIGHT
                    }
                }
                canvas.width = width
                canvas.height = height
                ctx.drawImage(img, 0, 0, width, height)

                canvas.toBlob((blob) => {
                    setFormData({ ...formData, image: blob })
                    const reader = new FileReader()
                    reader.onloadend = () => setPreview(reader.result)
                    reader.readAsDataURL(blob)
                }, file.type)
            }
        }
        reader.readAsDataURL(file)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const apiUrl = `${window.location.protocol}//${window.location.hostname}:3082/api/products`

        const data = new FormData()
        data.append('title', formData.title)
        data.append('price', formData.price)
        data.append('description', formData.description)
        data.append('category', formData.category)
        data.append('payment_id', formData.payment_id)
        data.append('meta_title', formData.meta_title)
        data.append('meta_description', formData.meta_description)
        data.append('meta_keywords', formData.meta_keywords)

        if (formData.image_url) {
            data.append('image_url', formData.image_url) // Append image URL
        } else if (formData.image) {
            data.append('image', formData.image) // Append image file
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: data, // Use FormData for file upload
            })

            if (!response.ok) {
                const errorData = await response.json()
                console.error('Error:', errorData)
            } else {
                const data = await response.json()
                console.log('Product added:', data)
            }
        } catch (err) {
            console.error('Fetch error:', err)
        }
    }

    // GSAP animation on form load
    useEffect(() => {
        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
    }, [])

    return (
        <form
            className="mx-auto max-w-3xl rounded-lg bg-slate-900 p-8 text-white shadow-lg"
            onSubmit={handleSubmit}
            ref={formRef} // Attach GSAP animation ref
        >
            <h2 className="mb-6 text-center text-3xl font-bold">
                Add New Product
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Title */}
                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title || ''} // Ensure the value is always a string
                    onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Price */}
                <input
                    type="number"
                    placeholder="Price"
                    value={formData.price || ''} // Ensure the value is always a string or number
                    onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                    }
                    className="w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Description */}
                <textarea
                    placeholder="Description"
                    value={formData.description || ''} // Ensure the value is always a string
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            description: e.target.value,
                        })
                    }
                    className="w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                />

                {/* Category */}
                <input
                    type="text"
                    placeholder="Category"
                    value={formData.category || ''} // Ensure the value is always a string
                    onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Meta Title */}
                <input
                    type="text"
                    placeholder="Meta Title"
                    value={formData.meta_title || ''} // Ensure the value is always a string
                    onChange={(e) =>
                        setFormData({ ...formData, meta_title: e.target.value })
                    }
                    className="w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Meta Description */}
                <textarea
                    placeholder="Meta Description"
                    value={formData.meta_description || ''} // Ensure the value is always a string
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            meta_description: e.target.value,
                        })
                    }
                    className="w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                />

                {/* Meta Keywords */}
                <input
                    type="text"
                    placeholder="Meta Keywords"
                    value={formData.meta_keywords || ''} // Ensure the value is always a string
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            meta_keywords: e.target.value,
                        })
                    }
                    className="w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Payment ID */}
                <input
                    type="text"
                    placeholder="Payment ID"
                    value={formData.payment_id || ''} // Ensure the value is always a string
                    onChange={(e) =>
                        setFormData({ ...formData, payment_id: e.target.value })
                    }
                    className="w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="my-6">
                {/* Radio buttons to select between Image URL and File Upload */}
                <div className="flex justify-center space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="imageType"
                            value="url"
                            checked={selectedImageType === 'url'}
                            onChange={() => {
                                setSelectedImageType('url')
                                setFormData({
                                    ...formData,
                                    image: null,
                                    image_url: '',
                                }) // Clear image and set image_url
                                setPreview('') // Clear preview
                            }}
                        />
                        <span>Image URL</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="imageType"
                            value="file"
                            checked={selectedImageType === 'file'}
                            onChange={() => {
                                setSelectedImageType('file')
                                setFormData({
                                    ...formData,
                                    image_url: '',
                                    image: null,
                                }) // Clear image_url and set image
                                setPreview('') // Clear preview
                            }}
                        />
                        <span>Upload Image</span>
                    </label>
                </div>

                {/* Conditionally render either the Image URL input or File input */}
                {selectedImageType === 'file' ? (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-4 w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue={''} // Ensure the value is always a controlled value
                    />
                ) : (
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={formData.image_url || ''} // Ensure the value is always a string
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                image_url: e.target.value,
                            })
                        }
                        className="mt-4 w-full rounded-lg border bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                )}
            </div>

            {/* Display image preview */}
            {preview && (
                <div className="my-6">
                    <img
                        src={preview}
                        alt="Image preview"
                        className="h-auto w-full rounded-lg"
                    />
                </div>
            )}

            <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-600"
            >
                Add Product
            </button>
        </form>
    )
}

export default AddProductForm
