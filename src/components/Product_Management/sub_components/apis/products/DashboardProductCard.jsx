//DashboardProductCard.jsx
/*
A component that displays product information in a card format and allows editing and deletion of products
*/

import propTypes from 'prop-types'

//INFO Icons
import { FaTrash, FaArrowDown } from 'react-icons/fa'

//INFO Custom Tailwind Modules
import CustomHRTagV1 from '../../tailwindModules/CustomHRTagV1'

function DashboardProductCard({
    product,
    editProduct,
    editedData,
    setEditedData,
    imageOption,
    imageUrl,
    handleFileChange,
    handleImageUrlChange,
    handleImageOptionChange,
    handleDeleteClick,
    handleInputChange,
    cardRefs,
    trashIconRefs,
    arrowRefs,
    setHoveredIndex,
    index,
    handleSave,
    apiUrl,
    fetchProducts,
    imageFile,
    handleCancel,
    setImageFile,
    setImageUrl,
    convertBlobToBase64,
    handleEditClick,
    setImageOption,
    setSelectedProduct,
    setShowModal,
}) {
    // useEffect(() => {
    //     console.log('editedData:', editedData)
    //     console.log('imageOption:', imageOption)
    //     console.log('imageUrl:', imageUrl)
    //     console.log('imageFile:', imageFile)
    // }, [imageOption, imageUrl, imageFile, editedData])
    // console.log('Rendering DashboardProductCard:', { title: editedData.title })

    return (
        <div
            key={product.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`group relative flex flex-col justify-between rounded-lg border border-gray-300 bg-white p-2 shadow-md transition-transform duration-300 ${
                editProduct === product.id
                    ? 'hover:scale-105 hover:shadow-lg'
                    : 'hover:scale-105 hover:shadow-lg'
            }`}
            style={{
                height: editProduct === product.id ? 'auto' : 'initial', // Ensure edited card grows, others stay unchanged
                alignSelf: editProduct === product.id ? 'stretch' : 'start', // Expand the card independently
                overflow: editProduct === product.id ? 'visible' : 'hidden', // Ensure content is visible when editing
            }}
        >
            <button
                onClick={() =>
                    handleDeleteClick(
                        product.id,
                        index,
                        setSelectedProduct,
                        setShowModal
                    )
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute right-1 top-1 text-red-500 transition-colors duration-300 hover:text-red-700"
                aria-label={`Delete ${product.title}`}
            >
                {/* Trash Icon - Wrap it in a span for ref */}
                <span ref={(el) => (trashIconRefs.current[index] = el)}>
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
                            value={editedData.title ?? ''}
                            onChange={(e) =>
                                handleInputChange(e, setEditedData)
                            }
                            className="mb-1.5 w-full rounded-lg border border-gray-300 "
                        />
                    </div>
                    {CustomHRTagV1()}

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
                            value={imageOption ?? ''}
                            onChange={(e) =>
                                handleImageOptionChange(
                                    e,
                                    editedData,
                                    setEditedData
                                )
                            }
                            className="w-full rounded-lg border border-gray-300 p-2"
                        >
                            <option value="image_url">Use Image URL</option>
                            <option value="image_upload">
                                Upload New Image
                            </option>
                        </select>
                    </div>

                    {imageOption === 'image_url' ? (
                        <div className="mb-4">
                            <label
                                htmlFor="image_url"
                                className="mb-1 block  font-medium"
                            >
                                Image URL
                            </label>

                            {/* Image URL Input */}
                            <input
                                type="text"
                                id="image_url"
                                name="image_url"
                                value={imageUrl ?? ''}
                                onChange={(e) =>
                                    handleImageUrlChange(e, setEditedData)
                                }
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
                                onChange={(e) => {
                                    console.log('File:', e)

                                    return handleFileChange(e)
                                }}
                                className="w-full rounded-lg border border-gray-300 p-2"
                            />

                            {CustomHRTagV1()}
                        </div>
                    )}

                    <label htmlFor="price" className="mb-1 block font-medium">
                        Price
                    </label>
                    {/* Product Price Input */}

                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={editedData.price ?? ''}
                        onChange={(e) => handleInputChange(e, setEditedData)}
                        className="mb-1.5 w-full rounded-lg border border-gray-300 "
                    />
                    {CustomHRTagV1()}
                    <label
                        htmlFor="description"
                        className="mb-1 block font-medium"
                    >
                        Description
                    </label>
                    {/* Product Description Input */}
                    <textarea
                        id="description"
                        name="description"
                        value={editedData.description ?? ''}
                        onChange={(e) => handleInputChange(e, setEditedData)}
                        className="w-full resize-none overflow-hidden rounded-lg border border-gray-300"
                        rows={1} // Start with 1 row
                        onInput={(e) => {
                            e.target.style.height = 'auto'
                            e.target.style.height = `${e.target.scrollHeight}px`
                        }}
                    ></textarea>

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
                            value={editedData.meta_title ?? ''}
                            onChange={(e) =>
                                handleInputChange(e, setEditedData)
                            }
                            className="mb-1.5 w-full rounded-lg border border-gray-300 "
                        />
                        {CustomHRTagV1()}
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
                            value={editedData.meta_description ?? ''}
                            onChange={(e) =>
                                handleInputChange(e, setEditedData)
                            }
                            className="w-full resize-none overflow-hidden rounded-lg border border-gray-300"
                            rows={1} // Start with 1 row
                            onInput={(e) => {
                                e.target.style.height = 'auto'
                                e.target.style.height = `${e.target.scrollHeight}px`
                            }}
                        ></textarea>

                        {CustomHRTagV1()}
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
                            value={editedData.meta_keywords ?? ''}
                            onChange={(e) =>
                                handleInputChange(e, setEditedData)
                            }
                            className="w-full rounded-lg border border-gray-300 "
                        ></textarea>
                        {CustomHRTagV1()}
                    </div>

                    {/* Save and Cancel Buttons */}
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() =>
                                handleSave(
                                    product.id,
                                    apiUrl,
                                    editedData,
                                    fetchProducts,
                                    imageOption,
                                    imageFile,
                                    imageUrl
                                )
                            }
                            className="rounded-lg bg-green-600 px-4 py-2 text-white transition duration-300 hover:bg-green-800"
                        >
                            Save
                        </button>
                        <button
                            onClick={() =>
                                handleCancel(
                                    setEditedData,
                                    setImageFile,
                                    setImageUrl
                                )
                            }
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
                    <h2 className="absolute top-0 mb-2 text-xl font-semibold text-gray-800">
                        {product.title}
                    </h2>
                    <div className="mt-8">
                        {product.image_url ? (
                            // Display image URL if available
                            <img
                                className="mb-4 h-48 w-full rounded-lg object-cover shadow-sm transition-all duration-200 hover:shadow-md"
                                src={product.image_url}
                                alt={`${product.title} product image`}
                            />
                        ) : product.image ? (
                            // Display Image file if available
                            <img
                                className="mb-4 h-48 w-full rounded-lg object-cover shadow-sm transition-all duration-200 hover:shadow-md"
                                src={convertBlobToBase64(product.image)}
                                alt={`${product.title} product image`}
                            />
                        ) : (
                            //   No image available
                            <img
                                className="mb-4 h-48 w-full rounded-lg object-cover shadow-sm transition-all duration-200 hover:shadow-md"
                                src="public/images/no-image.webp"
                                alt="No image available"
                            />
                        )}
                    </div>
                    <div className="rounded-lg bg-slate-200 p-2  text-gray-800">
                        {/* Product Price */}
                        <p className="mb-2 font-bold text-gray-900">
                            Price: ${product.price}
                        </p>

                        {CustomHRTagV1()}

                        {/* Product Description */}
                        <p className="mb-2 text-gray-700">
                            Description: {product.description}
                        </p>

                        {CustomHRTagV1()}

                        {/* Product Category */}
                        <p className="text-gray-600">
                            Category: {product.category}
                        </p>

                        {CustomHRTagV1()}

                        {/* Meta Data */}

                        {/* Meta Title */}
                        <p className="text-gray-600">
                            Meta Title: {product.meta_title}
                        </p>

                        {CustomHRTagV1()}

                        {/* Meta Description */}
                        <p className="text-gray-600">
                            Meta Description: {product.meta_description}
                        </p>

                        {CustomHRTagV1()}

                        {/* Meta Keywords */}
                        <p className="text-gray-600">
                            Meta Keywords: {product.meta_keywords}
                        </p>

                        {CustomHRTagV1()}

                        {/* Edit Button */}
                        <button
                            onClick={() =>
                                handleEditClick(
                                    product,
                                    setEditedData,
                                    setImageOption,
                                    setImageUrl,
                                    setImageFile
                                )
                            }
                            className="mt-4 w-full rounded-lg bg-yellow-600 px-4 py-2 text-white transition duration-300 hover:bg-yellow-800"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

DashboardProductCard.propTypes = {
    product: propTypes.object.isRequired,
    editProduct: propTypes.number,
    editedData: propTypes.object.isRequired,
    setEditedData: propTypes.func.isRequired,
    imageOption: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    handleFileChange: propTypes.func.isRequired,
    handleImageUrlChange: propTypes.func.isRequired,
    handleImageOptionChange: propTypes.func.isRequired,
    handleDeleteClick: propTypes.func.isRequired,
    handleInputChange: propTypes.func.isRequired,
    cardRefs: propTypes.object.isRequired,
    trashIconRefs: propTypes.object.isRequired,
    arrowRefs: propTypes.object.isRequired,
    setHoveredIndex: propTypes.func.isRequired,
    index: propTypes.number.isRequired,
    handleSave: propTypes.func.isRequired,
    apiUrl: propTypes.string.isRequired,
    fetchProducts: propTypes.func.isRequired,
    imageFile: propTypes.object,
    handleCancel: propTypes.func.isRequired,
    setImageFile: propTypes.func.isRequired,
    setImageUrl: propTypes.func.isRequired,
    convertBlobToBase64: propTypes.func.isRequired,
    handleEditClick: propTypes.func.isRequired,
    setImageOption: propTypes.func.isRequired,
    setSelectedProduct: propTypes.func.isRequired,
    setShowModal: propTypes.func.isRequired,
}

export default DashboardProductCard
